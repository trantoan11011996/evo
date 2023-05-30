import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { langReducer } from "./reducers/reducers";
import { useDispatch } from "react-redux";
const persistConfig = {
  key: "root",
  storage,
};
const langConfig = {
  key: "lang",
  storage,
};

const rootReducer = combineReducers({
  lang: persistReducer(langConfig, langReducer),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
/// lấy rootState và appDispatch từ store
export type RootState = ReturnType<typeof store.getState>;

export type AppDisPatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDisPatch>();
