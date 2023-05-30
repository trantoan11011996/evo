import React, { useEffect } from "react";
import "./Features.style.css";
import { IdElement } from "../../../../../shared/constant/app.constant";
import { useTranslation } from "react-i18next";
import * as aos from "aos";
import "aos/dist/aos.css";
import { FeaturesList } from "../../../../../shared/constant/app.constant";
import { ANIMATION_ZOOM_IN } from "../../../../../shared/constant/animation.constant";
function FeaturesComponent() {
  const { t }: any = useTranslation();
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  return (
    <div id={IdElement.features.title} className="container-features">
      <div
        className="header-element"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <h1>{t("features.title")}</h1>
      </div>
      <div className="desc-element" data-aos="zoom-in" data-aos-duration="600">
        <p>{t("features.paragraph")}</p>
      </div>
      <div className="bottom"></div>
      <div className="features-list-container">
        <div className="features-content-container features-responsive">
          <div
            className="features-content mb-4"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[0].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[0].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[0].description}`)}</p>
                </div>
              </div>
            </div>
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[1].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[1].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[1].description}`)}</p>
                </div>
              </div>
            </div>
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[2].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[2].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[2].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[3].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[3].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[3].description}`)}</p>
                </div>
              </div>
            </div>
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[4].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[4].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[4].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-content-container features-responsive-1 ">
          <div
            className="features-content mb-4"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[0].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[0].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[0].description}`)}</p>
                </div>
              </div>
            </div>
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[1].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[1].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[1].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content mb-3"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card">
              {" "}
              <div className="features-card">
                <div className="img-card">
                  <img src={t(`${FeaturesList[2].image}`)} className=""></img>
                </div>
                <div className="content-card">
                  <div className="header-card">
                    <h2>{t(`${FeaturesList[2].title}`)}</h2>
                  </div>
                  <div className="desc-card">
                    <p>{t(`${FeaturesList[2].description}`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[3].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[3].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[3].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card">
              {" "}
              <div className="features-card">
                <div className="img-card">
                  <img src={t(`${FeaturesList[4].image}`)} className=""></img>
                </div>
                <div className="content-card">
                  <div className="header-card">
                    <h2>{t(`${FeaturesList[4].title}`)}</h2>
                  </div>
                  <div className="desc-card">
                    <p>{t(`${FeaturesList[4].description}`)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-content-container features-responsive-2 ">
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card mb-4">
              <div className="img-card">
                <img src={t(`${FeaturesList[0].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[0].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[0].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div
              className="features-card mb-4"
              data-aos={ANIMATION_ZOOM_IN.type}
              data-aos-duration={ANIMATION_ZOOM_IN.duration}
            >
              <div className="img-card">
                <img src={t(`${FeaturesList[1].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[1].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[1].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card mb-4">
              <div className="img-card">
                <img src={t(`${FeaturesList[2].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[2].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[2].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card mb-4">
              <div className="img-card">
                <img src={t(`${FeaturesList[3].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[3].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[3].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="features-content"
            data-aos={ANIMATION_ZOOM_IN.type}
            data-aos-duration={ANIMATION_ZOOM_IN.duration}
          >
            <div className="features-card">
              <div className="img-card">
                <img src={t(`${FeaturesList[4].image}`)} className=""></img>
              </div>
              <div className="content-card">
                <div className="header-card">
                  <h2>{t(`${FeaturesList[4].title}`)}</h2>
                </div>
                <div className="desc-card">
                  <p>{t(`${FeaturesList[4].description}`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;
