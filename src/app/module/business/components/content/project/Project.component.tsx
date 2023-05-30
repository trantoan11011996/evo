import React from "react";
import "./Project.style.css";
import {
  IdElement,
  ProjectList,
} from "../../../../../shared/constant/app.constant";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import image from "../../../../../../assets/img/project_company/project_1.png";
import { ANIMATION_ZOOM_IN } from "../../../../../shared/constant/animation.constant";
function ProjectComponent() {
  const { t }: any = useTranslation();
  return (
    <div id={IdElement.project.title} className="container-project">
      <div
        className="header-element"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <h1>{t("project.title")}</h1>
      </div>
      <div
        className="desc-element"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <p>{t("project.paragraph")}</p>
      </div>
      <div className="project-list">
        {ProjectList.map((item, index) => {
          return (
            <div
              className="item mb-3"
              data-aos={ANIMATION_ZOOM_IN.type}
              data-aos-duration={ANIMATION_ZOOM_IN.duration}
            >
              <a href={t(`${item.link}`)} target="_blank">
                <div className="image-project mb-3">
                  <img src={t(item.image, { id: item.id })}></img>
                  <div className="overlay">
                    <FaExternalLinkAlt className="icon-link-project"></FaExternalLinkAlt>{" "}
                  </div>
                </div>
              </a>
              <div className="content-image">
                <h2>{t(`${item.title}`)}</h2>
                <p>{t(`${item.desc}`)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectComponent;
