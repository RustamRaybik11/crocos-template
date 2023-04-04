import React, { SyntheticEvent, useRef, useState } from "react";
import Link from "next/link";

import { useLoadingContext } from "../../context/loading";
import { useRouter } from "next/router";
import DownloadCircle from "../../icons/DownloadCircle";
import { useTranslation } from "next-i18next";
import { AuthService } from "../../services/AuthService";
import { displayErrorMessage } from "../../utils/helpers";
import { LocalStorageHandler } from "../../utils/localStorageHandler";
import FormErrorMessage from "../../components/Form/FormErrorMessage";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import ArrowBlue from "../../icons/ArrowBlue";

const LoginEcpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { t, i18n } = useTranslation();
  const [isPersonOpen, setPersonOpen] = useState(false);
  const personRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(personRef, () => setPersonOpen(false));
  const refisterPki = () => {
    const websocket = new WebSocket("wss://127.0.0.1:13579/");
    let ready: boolean | null = null;
    let ecpData = {
      path: null,
      owner: null,
      data: null,
    };
    websocket.onopen = () => {
      ready = true;

      handle();
    };
    websocket.onclose = (e) => {
      if (e.wasClean) {
        console.log("connection closed");
      } else {
        alert(t("nca_layer_message"));

        console.log("error?");
        //setErrormodal(true);
        setTimeout(() => {
          //setErrormodal(false);
        }, 5000);
      }
    };

    function handle() {
      if (!ready) {
        alert(t("nca_layer_message"));
      } else {
        const data = {
          module: "kz.gov.pki.knca.commonUtils",
          method: "signXml",
          args: [
            "PKCS12",
            "AUTHENTICATION",
            "<login><sessionid>caacda70-fd36-45ed-8d94-45a88890f83a</sessionid></login>",
            "",
            "",
          ],
        };
        websocket.send(JSON.stringify(data));
      }
    }
    websocket.onmessage = (e) => {
      const data1 = JSON.parse(e.data);
      ecpData.data = data1.responseObject;
      const ECP = { ecp: data1.responseObject };
      if (ECP.ecp) {
        AuthService.signInUserPki(ECP)
          .then((res) => {
            LocalStorageHandler.setUserToken(res?.data?.token);
            // Ветвление взависимости от роли

            AuthService.getCurrentUser().then((res) => {
              if (res.data.data.role.slug === "admin")
                window.location.href = "/admin";
              else window.location.href = "/profile";
            });
            // router.push(`/`);
          })
          .catch((err) => {
            console.log()
            if(err.response.data.message === "Пользователь не найден"){
              setErrorMessage(err.response.data.message);
            }else {
              setErrorMessage(`${t("wrong_data")}`);
            }
            displayErrorMessage(`${t("error_occured")}`);
          })
          .finally(setIsLoading(false));
      }
    };
  };
  const { isLoading, setIsLoading } = useLoadingContext();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

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
            src={`/assets/images/new-logo${
              router.locale === "kk" ? "-kaz" : ""
            }.svg`}
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
        <div className="login__registration" style={{ gap: 10 }}>
          <div
            className="c-btn c-btn-primary c-btn-rounded"
            onClick={refisterPki}
          >
            <DownloadCircle /> {t("upload_setrificat")}
          </div>
          <FormErrorMessage>
            {errorMessage && t(`${errorMessage}`)}
          </FormErrorMessage>
          <Link href={"/login"}>
            <button className="c-btn" style={{ color: "#f69f34" }}>
              {t("sign_in_login")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginEcpPage;
