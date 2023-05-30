import React from "react";
import "./footer.style.css";
import { useTranslation } from "react-i18next";
import Form from "../../../shared/components/form/Form";
import { ANIMATION_ZOOM_IN } from "../../../shared/constant/animation.constant";
import { IdElement } from "../../../shared/constant/app.constant";
function Footer() {
  const { t }: any = useTranslation();
  return (
    <div id={IdElement.contact.title} className="footer-container">
      <h1
        className="header-element header-element-footer"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        {t("footer.title")}
      </h1>
      <div className="bottom"></div>
      <div
        className="container-content-footer"
        data-aos={ANIMATION_ZOOM_IN.type}
        data-aos-duration={ANIMATION_ZOOM_IN.duration}
      >
        <Form />
        <div className="footer-contact">
          <div className="contact">
            <h1 className="contact-label">
              {t("footer.form_contact.address.label")}
            </h1>
            <p className="contact-content">
              {t("footer.form_contact.address.content")}
            </p>
            <div className="map">
              <a href="https://goo.gl/maps/VfHeQ75nqoWx7fAz5" target="_blank">
                {t("footer.form_contact.address.map")}
              </a>
            </div>
          </div>
          <div className="contact">
            <h1 className="contact-label">
              {t("footer.form_contact.email.label")}
            </h1>
            <p className="contact-content">
              {t("footer.form_contact.email.content")}
            </p>
          </div>
          <div className="contact">
            <h1 className="contact-label">
              {t("footer.form_contact.phone.label")}
            </h1>
            <p className="contact-content">
              {t("footer.form_contact.phone.content")}
            </p>
          </div>
          <div className="contact">
            <h1 className="contact-label">
              {t("footer.form_contact.work_hours.label")}
            </h1>
            <p className="contact-content">
              {t("footer.form_contact.work_hours.content")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
