import React from "react";
import "./Partner.style.css";
import {
  IdElement,
  PartnerList,
} from "../../../../../shared/constant/app.constant";
import { useTranslation } from "react-i18next";
import { ANIMATION_ZOOM_IN } from "../../../../../shared/constant/animation.constant";
function PartnerComponent() {
  const { t }: any = useTranslation();
  return (
    <div id={IdElement.partner.title} className="container-partner">
      <div
        className="header-element"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <h1>{t("partner.title")}</h1>
      </div>
      <div
        className="desc-element desc-element-partner"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <p>{t("partner.paragraph")}</p>
      </div>
      <div className="bottom bottom-partner"></div>
      <div
        className="partner-list"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration="1500"
      >
        {PartnerList.map((item, index) => {
          return (
            <div className="partner-item">
              <img src={t(item.image, { id: item.id })}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PartnerComponent;
