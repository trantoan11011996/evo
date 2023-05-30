import { Fragment, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import { useTranslation } from "react-i18next";
import { SideBarList } from "../../../shared/constant/app.constant";
import "./header.style.css";
import i18n from "../../../../i18n/i18n";

function Header() {
  const { t }: any = useTranslation();
  const [lang, setLang] = useState("vie");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let langLocal: any = localStorage.getItem("lang");
    setLang(langLocal);
  }, []);
  const scrollToElement = (elementID: string) => {
    const element: any = document.getElementById(elementID);
    const offsetTop = element?.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const changeLang = async (value: string) => {
    localStorage.setItem("lang", value);
    setTimeout(() => {
      i18n.changeLanguage(value);
    }, 1000);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    setLang(value);
  };
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color="#fff"></ClipLoader>
        </div>
      ) : (
        <></>
      )}
      <div className="container-header">
        <div className="container-header-content">
          <div className="list-content-header">
            {SideBarList.map((item) => {
              return (
                <div
                  className="item"
                  onClick={() => scrollToElement(t(item.link))}
                >
                  <span>{t(item.title)}</span>
                </div>
              );
            })}
            <div className="item item-lang">
              <div className="lang">
                <img
                  src={
                    lang === "vie" ? "images/icon/vi.svg" : "images/icon/en.svg"
                  }
                ></img>
                <AiOutlineDown></AiOutlineDown>
              </div>
              <div className="select-lang">
                <div className="lang-item" onClick={() => changeLang("vie")}>
                  <img src="images/icon/vi.svg"></img>
                  <p>Vietnamese</p>
                </div>
                <div className="lang-item" onClick={() => changeLang("eng")}>
                  <img src="images/icon/en.svg"></img>
                  <p>English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
