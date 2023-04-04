import React, { useEffect, useState } from "react";
import LoginPage from "../../app/pages/login/LoginPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { useAuthContext } from "../../app/context/auth";
import { useRouter } from "next/router";
const Login = () => {
  const [rendered, setRendered] = useState(false);
  const { t } = useTranslation();
  const { userInfo, updateUserInfo } = useAuthContext();
  const router = useRouter();


  useEffect(() => {
    if (userInfo) {
      router.push("/profile");
    }
  }, [userInfo]);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return <LoginPage />;
  }
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ["translate"],
        nextI18NextConfig
      )),
    },
  };
};
export default Login;
