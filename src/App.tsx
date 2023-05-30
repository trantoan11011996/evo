import "./App.css";
import "../src/assets/css/style.custom.css";
import "../src/assets/css/responsive.css";
import { useEffect, useState } from "react";
import Header from "./app/core/layout/header/header";
import HomePageComponent from "./app/module/business/HomePage/HomePage.component";
import {
  BrowserRouter,
  HashRouter,
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./app/core/layout/footer/footer";
import { FaArrowUp } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toTopPage = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color="#fff"></ClipLoader>
        </div>
      ) : (
        <></>
      )}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <div className="myBtn" onClick={() => toTopPage()} title="Go to top">
        <FaArrowUp></FaArrowUp>
      </div>
    </div>
  );
}

export default App;
