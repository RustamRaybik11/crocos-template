import "../app/styles/main.scss";
import type { AppProps } from "next/app";
import { GetServerSideProps } from "next";
import { LoadingContext, useLoading } from "../app/context/loading";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";

import { LocalStorageHandler } from "../app/utils/localStorageHandler";
import { AuthService } from "../app/services/AuthService";
import { AuthContext } from "@/app/context/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading, setIsLoading } = useLoading();
  const { locale } = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (localStorage.getItem(".AuthToken")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
    const Token = LocalStorageHandler.getUserToken();
    if (Token) {
      AuthService.getCurrentUser()
        .then((res) => {})
        .catch((err) => {
          LocalStorageHandler.clearUserToken();
          router.push("/login");
        });
    }
    if (router.pathname == "/login") {
      LocalStorageHandler.clearUserToken();
      setIsAuth(false);
      router.push("/login");
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AuthContext.Provider
        value={{
          userInfo,
          isAuth,
          setIsAuth,
        }}
      >
        <Component {...pageProps} />
      </AuthContext.Provider>
    </LoadingContext.Provider>
  );
}
export default appWithTranslation(MyApp);

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      cookies: context.req.cookies ?? "",
    },
  };
};
