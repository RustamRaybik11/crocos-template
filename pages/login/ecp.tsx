import React, { useEffect, useState } from "react";
import LoginEcpPage from "../../app/pages/login/ECPLoginPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useAuthContext } from "../../app/context/auth";
const LoginEcp = () => {
  const [rendered, setRendered] = useState(false);
  const { t } = useTranslation();
  const { userInfo, updateUserInfo } = useAuthContext();
  const router = useRouter();
  console.log(userInfo);
  
  useEffect(() => {
    if (userInfo) {
      router.push("/profile");
    }
  }, [userInfo]);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return <LoginEcpPage />;
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
export default LoginEcp;
