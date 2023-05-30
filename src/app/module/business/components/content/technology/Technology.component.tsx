import React from "react";
import "./Technology.style.css";
import {
  IdElement,
  TechoList,
} from "../../../../../shared/constant/app.constant";
import { useTranslation } from "react-i18next";
import { ANIMATION_ZOOM_IN } from "../../../../../shared/constant/animation.constant";
function TechnologyComponent() {
  const { t }: any = useTranslation();
  return (
    <div id={IdElement.techno.title} className="container-techno">
      <div
        className="header-element"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <h1>{t("technology.title")}</h1>
      </div>
      <div
        className="desc-element"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <p>{t("technology.paragraph")}</p>
      </div>
      <div className="bottom bottom_techno"></div>
      <div className="techno-list">
        {TechoList.map((item, index) => {
          return (
            <div
              className="techno-icon"
              data-aos={ANIMATION_ZOOM_IN.type}
              data-aos-duration="1500"
            >
              <img src={t(item.image, { id: item.id })} />
              <p>{t(item.label)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyComponent;
