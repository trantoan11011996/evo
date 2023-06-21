import React from "react";
import "./topBg.css";
import PracticleBg from "../../../../../shared/components/animation/practicleBg";
import { Link } from "react-router-dom";
import { logo } from "../../../../../shared/constant/app.constant";
import { useTranslation } from "react-i18next";
export interface Props {
  openSidebar: any;
}
function TopBgComponent({ openSidebar }: Props) {
  const { t } = useTranslation();

  const handleOpenSideBar = () => {
    openSidebar();
  };

  return (
    <div id="top-bg" className="topBg-container">
      <div className="logo-topBg">
        <Link className="link-logo" to={"/"}>
          <img src={logo}></img>
        </Link>
        <div className="toggle-sidebar" onClick={() => handleOpenSideBar()}>
          <div className="dash"></div>
          <div className="dash"></div>
          <div className="dash"></div>
        </div>
      </div>
      <div className="intro">
        <PracticleBg />
        <div className="topBg-content">
          <div className="content">
            <h1 className="header-content-topBg">{t("header.title")}</h1>
            <p>{t("header.paragraph")}</p>
            <button className="btn-topBg">
              <a>{t("header.contact")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBgComponent;
