import React, { useState } from "react";
import Link from "next/link";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";
import WhatsApp from "../../icons/WhatsApp";
import Phone from "../../icons/Phone";
import Mail from "../../icons/Mail";
import MapPin from "../../icons/MapPin";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer className={`footer footer_contacts`}>
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-mobile">
              <div className="footer-top--logo">
                <Link href={"/"}>
                  <img src={"/assets/images/logo.svg"} />
                </Link>
              </div>
              <div className="footer-top--socials">
                <div>
                  <a href={``}>
                    <Facebook />
                  </a>
                </div>
                <div>
                  <a href={``} target={"_blank"}>
                    <Instagram />
                  </a>
                </div>
                <div>
                  <a href={``} target={"_blank"}>
                    <WhatsApp />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-top--menu">
              <nav>
                <ul>
                  <Link href={"/"}>
                    <li>Главная</li>
                  </Link>
                  <Link href={"/industries"}>
                    <li>Пост</li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="footer-top--actions">
              {/* <button className="c-btn c-btn-primary">
								{t("buttons.orderConsultation")}
							</button> */}
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <div className="footer-bottom-text">
                <img src="/assets/images/kupiya.png" alt="" />
              </div>
              <div className="footer-bottom-contacts">
                <a href={`tel:777777777777`}>
                  <span style={{ whiteSpace: "nowrap" }}>
                    <Phone /> 777777777777
                  </span>
                </a>
                <a href={`mailto:test@test.test`}>
                  <span>
                    <Mail /> test@test.test
                  </span>
                </a>
                <a>
                  <span>
                    <MapPin /> Address
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
