import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import React, { useState, useEffect } from "react";
import Close from "../../icons/Close";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";
import WhatsApp from "../../icons/WhatsApp";
import { useAuthContext } from "../../context/auth";

type Props = {
  handleClose: Function;
  isActive: boolean;
};
const HeaderBurger: React.FC<Props> = ({ handleClose, isActive }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { companyInfo, userInfo } = useAuthContext();

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem(".AuthToken")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div
      className={`header-burger__container ${
        isActive ? "header-burger__container--active" : ""
      }`}
    >
      {isAuth && companyInfo ? (
        <Link href={"/company-account"}>
          <button className="c-btn c-btn-primary">
            {t("navbar.personalAccount")}
          </button>
        </Link>
      ) : (
        <div style={{ marginTop: "50px" }}></div>
      )}

      <nav>
        <ul>
          <Link href={"/"}>
            <li
              className={router.pathname == "/" ? "header__list--active" : ""}
            >
              {t("navbar.main")}
            </li>
          </Link>
          <Link href={"/industries"}>
            <li
              className={
                router.pathname.includes("/industries")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.news")}
            </li>
          </Link>
          <Link href={"/security-services"}>
            <li
              className={
                router.pathname.includes("/security-services")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.securityServices")}
            </li>
          </Link>
          <Link href={"/education"}>
            <li
              className={
                router.pathname.includes("/education")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.education")}
            </li>
          </Link>
          <Link href={"/vacancies/job"}>
            <li
              className={
                router.pathname.includes("/vacancies")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.vacancies")}
            </li>
          </Link>
          <Link href={"/market"}>
            <li
              className={
                router.pathname.includes("/market")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.market")}
            </li>
          </Link>
          <Link href={"/services"}>
            <li
              className={
                router.pathname.includes("/services")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.services")}
            </li>
          </Link>
          <Link href={"/tenders"}>
            <li
              className={
                router.pathname.includes("/tenders")
                  ? "header__list--active"
                  : ""
              }
            >
              {t("navbar.tenders")}
            </li>
          </Link>

          <Link href={"/cyber-security"}>
            <li
              className={
                router.pathname.includes("/cyber-security")
                  ? "header__list--active"
                  : ""
              }
            >
              Cyber
            </li>
          </Link>
          <Link href={"/place-advt"}>
            <li className="c-btn c-btn-outline-primary  ">
              {t("navbar.adSend")}
            </li>
          </Link>
        </ul>
      </nav>
      <div className="header-burger__socials">
        <a href="https://wa.me/+77010145522" target={"_blank"}>
          <WhatsApp />
        </a>
        <a href="https://www.instagram.com/kupiya.kz/" target={"_blank"}>
          <Instagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086683549429">
          <Facebook />
        </a>
      </div>
      <div className="header-burger__close" onClick={() => handleClose()}>
        <Close />
      </div>
    </div>
  );
};

export default HeaderBurger;
