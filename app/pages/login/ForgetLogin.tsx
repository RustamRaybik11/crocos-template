import React, { SyntheticEvent, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import { useForm } from "react-hook-form";
import FormControl from "../../components/Form/FormControl";
import Input from "../../components/Form/Input";
import { ILoginForget } from "../../constants/interfaces";
import { useLoadingContext } from "../../context/loading";
import {
  displayErrorMessage,
  displayInfoMessage,
  displaySuccessMessage,
} from "../../utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgetSchema, LoginSchema } from "../../constants/validation";
import FormErrorMessage from "../../components/Form/FormErrorMessage";
import { AuthService } from "../../services/AuthService";
import { LocalStorageHandler } from "../../utils/localStorageHandler";
import { useRouter } from "next/router";
import User from "../../icons/User";
import Email from "../../icons/Email";
import { useTranslation } from "next-i18next";
import ArrowBlue from "../../icons/ArrowBlue";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const LoginForgetPage = () => {
  const { t, i18n } = useTranslation();
  const { formState, register, handleSubmit, control } = useForm<ILoginForget>({
    mode: "onBlur",
    resolver: yupResolver(ForgetSchema),
  });
  const [isPersonOpen, setPersonOpen] = useState(false);
  const personRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(personRef, () => setPersonOpen(false));
  const { errors } = formState;
  const [iinError, setIinError] = useState(false);
  const { isLoading, setIsLoading } = useLoadingContext();
  const router = useRouter();
  const onSubmit = (data: any) => {
    setIsLoading(true);
    setIinError(false);
    AuthService.resetPassword(data)
      .then((res) => {
        displaySuccessMessage(t("letter_was_send"));
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      })
      .catch((err) => {
        setIinError(true);
      })
      .finally(setIsLoading(false));
  };
  const { pathname, asPath, query, locale } = router;

  const changeLocale = (lang: "ru" | "kk", event: SyntheticEvent) => {
    event.preventDefault();
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <>
      <div className="login__wrapper--bg">
        <div className="login__wrapper">
        <div className="login__wrapper_top">
        <img
            className="logo-img"
            src={`/assets/images/new-logo${router.locale === "kk" ? "-kaz" : ''}.svg`} alt="logo"
          />
                    <div className="sidemenu-user__dropdown">
            <div
              className={`sidemenu-user__dropdown--main main__header--lang ${
                isPersonOpen ? "lang--open" : ""
              }`}
              onClick={() => setPersonOpen(true)}
            >
              {i18n.language === "ru" ? t("rus_lang") : t("kaz_lang")}
              <ArrowBlue />
            </div>
            <div
              ref={personRef}
              className={`sidemenu-user__dropdown--hiden header--lang__items ${
                isPersonOpen ? "active" : ""
              }`}
            >
              <span
                onClick={(event) => {
                  changeLocale("ru", event);
                }}
                className={i18n.language === "ru" ? "active" : ""}
              >
                {t("rus_lang")}
              </span>
              <span
                onClick={(event) => {
                  changeLocale("kk", event);
                }}
                className={i18n.language === "kk" ? "active" : ""}
              >
                {t("kaz_lang")}
              </span>
            </div>
          </div>
        </div>
          <h1>{t("password_recovery")}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                iconLeft={<User />}
                iconBg
                rounded
                placeholder={`${t("iin_login")}`}
                register={{ ...register("iin") }}
              />
              <FormErrorMessage>{errors.iin?.message && t(`${errors.iin?.message}`)}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <Input
                rounded
                iconBg
                iconLeft={<Email />}
                placeholder={`${t("email")}`}
                register={{ ...register("email") }}
              />
              <FormErrorMessage>{errors.email?.message && t(`${errors.email?.message}`)}</FormErrorMessage>
            </FormControl>
            <p className="login-hint">{t("new_pass")}</p>
            <p className="login-hint">
              <FormErrorMessage>
                {iinError && t(`${"data_not_found"}`)}
              </FormErrorMessage>
            </p>

            <div className="login__registration">
              <button type="submit" className="c-btn c-btn-accent">
                {t("send")}
              </button>
              <Link href="/login">
                <button className="c-btn" style={{ color: "#f69f34" }}>
                  {t("login")}
                </button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginForgetPage;
