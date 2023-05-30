import "./About.style.css";
import {
  AboutList,
  IdElement,
} from "../../../../../shared/constant/app.constant";
import { useTranslation } from "react-i18next";
import {
  ANIMATION_FADE_LEFT,
  ANIMATION_ZOOM_IN,
} from "../../../../../shared/constant/animation.constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function AboutComponent() {
  const { t }: any = useTranslation();
  return (
    <div id={IdElement.about.title} className="container-about">
      <div
        className="header-element header-element-about"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
        data-aos-easing={ANIMATION_ZOOM_IN.easing}
      >
        <h1>{t("about.title")}</h1>
      </div>
      <div
        className="desc-element desc-element-about"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <p>{t("about.paragraph")}</p>
      </div>
      <div className="bottom bottom-about"></div>
      <div
        className="about-list"
        data-aos={ANIMATION_FADE_LEFT.type}
        data-aos-duration={ANIMATION_FADE_LEFT.duration}
        data-aos-easing={ANIMATION_FADE_LEFT.easing}
      >
        {AboutList.map((item, index) => {
          return (
            <div key={index} className="item-about">
              <div className="image-item-about">
                <img src={t(item.image)} />
              </div>
              <p>{t(item.label)}</p>
            </div>
          );
        })}
      </div>
      <div className="about-list-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            200: {
              width: 200,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              width: 400,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            650: {
              width: 650,
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {AboutList?.map((item, index) => {
            return (
              <SwiperSlide>
                {" "}
                <div className="item-about">
                  <div className="image-item-about">
                    <img src={t(item.image)}></img>
                  </div>
                  <p>{t(item.label)}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutComponent;
