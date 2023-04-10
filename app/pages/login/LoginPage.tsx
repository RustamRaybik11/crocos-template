import React, { SyntheticEvent, useRef, useState } from "react";

import Link from "next/link";
import { useForm } from "react-hook-form";
import FormControl from "../../components/Form/FormControl";
import Input from "../../components/Form/Input";
import { ILogin } from "../../constants/interfaces";
import { useLoadingContext } from "../../context/loading";
import { displayErrorMessage } from "../../utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../constants/validation";
import FormErrorMessage from "../../components/Form/FormErrorMessage";
import { AuthService } from "../../services/AuthService";
import { LocalStorageHandler } from "../../utils/localStorageHandler";
import { useRouter } from "next/router";
import User from "../../icons/User";
import Lock from "../../icons/Lock";
import { useTranslation } from "next-i18next";
import CheckboxInput from "../../components/Form/CheckboxInput";
import ArrowBlue from "../../icons/ArrowBlue";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const [passwordType, setPasswordType] = useState("password");
  const [wrongIin, setWrongIin] = useState<string>();
  const [isPersonOpen, setPersonOpen] = useState(false);
  const personRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(personRef, () => setPersonOpen(false));
  const changeType = (type: string) => {
    setPasswordType(type);
  };
  const { formState, register, handleSubmit, control } = useForm<ILogin>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });
  const { errors } = formState;
  const { isLoading, setIsLoading } = useLoadingContext();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const onSubmit = (data: any) => {
    setIsLoading(true);
    AuthService.signInUser(data)
      .then((res) => {
        LocalStorageHandler.setUserToken(res?.data?.token);
        // Ветвление взависимости от роли
        AuthService.getCurrentUser().then((res) => {
          if (res.data.data.role.slug === "admin")
            window.location.href = `${locale === "kk" ? "/kk" : ""}/admin`;
          else window.location.href = `${locale === "kk" ? "/kk" : ""}/profile`;
        });
      })
      .catch((err) => {
        console.log(err);

        setWrongIin(err.response.data.message);
        displayErrorMessage(err.message);
      })
      .finally(setIsLoading(false));
  };

  const changeLocale = (lang: "ru" | "kk", event: SyntheticEvent) => {
    event.preventDefault();
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div className="login__wrapper--bg">
      <div className="login__wrapper">
        <div className="login__wrapper_top">
          <img
            className="logo-img"
            src={`/assets/images/logo.svg`}
            alt="logo"
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
        <h1>{t("autorization")}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              iconLeft={<User />}
              iconBg
              type="number"
              rounded
              placeholder={`${t("iin")}`}
              onInput={() => setWrongIin("")}
              register={{ ...register("iin") }}
            />
            <FormErrorMessage>
              {errors?.iin?.message && t(`${errors?.iin?.message}`)}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <Input
              type={passwordType}
              changeType={changeType}
              rounded
              iconBg
              iconLeft={<Lock />}
              onInput={() => setWrongIin("")}
              placeholder={`${t("pass")}`}
              register={{ ...register("password") }}
            />
            <FormErrorMessage>
              {errors.password?.message && t(`${errors.password?.message}`)}
            </FormErrorMessage>
          </FormControl>
          {wrongIin && (
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <FormErrorMessage>
                {wrongIin && t(`${wrongIin}`)}
              </FormErrorMessage>
            </div>
          )}
          <div className="login__registration">
            <button type="submit" className="c-btn c-btn-accent">
              {t("in")}
            </button>
            <div className="d-flex">
              <CheckboxInput
                control={control}
                label={`${t("save_in")}`}
                register={{ ...register("remember") }}
              />
            </div>

            <Link href="/login/forget">
              <button className="c-btn" style={{ color: "#f69f34" }}>
                {t("forgot_pass")}
              </button>
            </Link>
          </div>
        </form>
        <div className="login__separator">
          <span></span>
          <p>{t("or")}</p>
          <span></span>
        </div>
        <div className="login__registration">
          <Link href="/login/ecp">
            <button className="c-btn c-btn-primary">{t("login_ecp")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
