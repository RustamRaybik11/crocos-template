import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLoadingContext } from "../../context/loading";
import WhatsApp from "../../icons/WhatsApp";
import Instagram from "../../icons/Instagram";
import Facebook from "../../icons/Facebook";
import ArrowDown from "../../icons/ArrowDown";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import UserCircle from "../../icons/UserCircle";
import HeaderBurger from "../HeaderBurger";
import { useTranslation } from "next-i18next";
import { LocalStorageHandler } from "../../utils/localStorageHandler";
import { useAuthContext } from "../../context/auth";

const Header = () => {
  const { isLoading, setIsLoading } = useLoadingContext();
  const { t } = useTranslation();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const router = useRouter();

  const { pathname, asPath, query } = router;

  const [isLocaleOpen, setLocaleOpen] = useState(false);
  const [chosenLocale, setChosenLocale] = useState(0);

  const localeRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(localeRef, () => setLocaleOpen(false));

  const handleCloseBurger = () => {
    setBurgerOpen(false);
  };
  const locales: Array<{
    id: number;
    locale: string;
    lang: "ru" | "kk" | "en";
  }> = [
    {
      id: 0,
      locale: "Қазақша",
      lang: "kk",
    },
    {
      id: 1,
      locale: "Русский",
      lang: "ru",
    },
    {
      id: 2,
      locale: "English",
      lang: "en",
    },
  ];
  // const locations = [
  // 	{
  // 		id: 0,
  // 		location: "Астана"
  // 	},
  // 	{
  // 		id: 1,
  // 		location: "Алматы"
  // 	},
  // 	{
  // 		id: 2,
  // 		location: "Акмолинская область"
  // 	},
  // 	{
  // 		id: 3,
  // 		location: "Актюбинская область"
  // 	},
  // 	{
  // 		id: 4,
  // 		location: "Восточно-Казахстанская область"
  // 	}
  // ];
  // const getCurrentLocation = (id: number) => {
  // 	const currentLocation = locations.find((item) => id === item.id);
  // 	return currentLocation?.location;
  // };
  // const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  // 	if (localStorage.getItem(".AuthToken")) {
  // 		setIsAuth(true);
  // 	} else {
  // 		setIsAuth(false);
  // 	}
  // }, []);
  let src;
  return (
    <>
      <HeaderBurger isActive={isBurgerOpen} handleClose={handleCloseBurger} />
      <header className="header">
        <div className="container">
          <div className="header__container ">
            <div className="header__left">
              <Link href="/">
                <div className="header__left--logo">
                  <img
                    className="header__left--logo-desctop"
                    src={"/assets/images/logo.svg"}
                    alt="logo"
                  />
                  <img
                    className="header__left--logo-mobile"
                    src={"/assets/images/logo.svg"}
                    alt="logo"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="header__list">
            <nav>
              <ul>
                <Link href={"/"}>
                  <li
                    className={
                      router.pathname == "/" ? "header__list--active" : ""
                    }
                  >
                    Главная
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
                    Страница 1
                  </li>
                </Link>
                <Link href={"/security-service-page"}>
                  <li
                    className={
                      router.pathname.includes("/security-service-page")
                        ? "header__list--active"
                        : ""
                    }
                  >
                    Страница 2
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="header__burger">
            <button
              className="c-btn c-btn-primary"
              onClick={() => setBurgerOpen(true)}
            >
              {t("navbar.menu")}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
