import React, { Fragment, useEffect, useState } from "react";
import "./sidebar.style.css";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarList } from "../../../shared/constant/app.constant";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import i18n from "../../../../i18n/i18n";
import { ClipLoader } from "react-spinners";
import { BsDownload } from "react-icons/bs";
export interface Props {
  closeSidebar: any;
  toggle: boolean;
}
function Sidebar({ closeSidebar, toggle }: Props) {
  const { t }: any = useTranslation();
  const [lang, setLang] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const langLocal: any = localStorage.getItem("lang");
    setLang(langLocal);
  }, []);
  const hanldeCloseSidebar = () => {
    closeSidebar();
  };
  const handleChange = (value: any) => {
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
      <div
        className={
          toggle ? "sidebar-container sidebar-slidein" : "sidebar-container"
        }
      >
        <div className="sidebar-content-container">
          <div className="sidebar-header">
            <p className="sidebar-header-menu">Menu</p>
            <div className="close-sidebar" onClick={() => hanldeCloseSidebar()}>
              <AiOutlineClose className="icon-close"></AiOutlineClose>
            </div>
          </div>
          <div className="sidebar-content-list">
            <span className="sidebar-content-title">
              {t("sidebar.homepage.title")}
            </span>
            {SideBarList.map((item, index) => {
              return (
                <div className="item-sidebar" key={index}>
                  <span>{t(item.title)}</span>
                </div>
              );
            })}
          </div>
          <div className="select-language">
            <Select
              defaultValue={lang === "vie" ? "Vietnamese" : "English"}
              className="select"
              style={{
                width: 150,
              }}
              onChange={handleChange}
              options={[
                { value: "vie", label: "Vietnamese" },
                { value: "eng", label: "English" },
              ]}
            ></Select>
          </div>
          <div className="sidebar-description">
            <span>{t("sidebar.paragraph")}</span>
          </div>
          <div className="profile">
            <a
              className="link_profile"
              href="https://evosolution.vn/wp-content/uploads/2021/04/ho-so-vi.pdf"
              target="_blank"
            >
              <span>{t("sidebar.profile")}</span>
              <BsDownload className="download"></BsDownload>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
