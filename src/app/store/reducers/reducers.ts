import { createAction, createReducer } from "@reduxjs/toolkit";
import { ILang } from "../../shared/types/lang.types";
import { create } from "domain";

const initialLang: ILang = {
  lang: "vie",
};
const counter = {
  value: 0,
};
export const changeLang = createAction<string>("lang/change");
export const langReducer = createReducer(initialLang, (builder) => {
  builder.addCase(changeLang, (state, action) => {
    state.lang = action.payload;
  });
});
