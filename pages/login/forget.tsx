import React, { useEffect, useState } from "react";
import LoginForgetPage from "../../app/pages/login/ForgetLogin";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import { useAuthContext } from "../../app/context/auth";
const LoginForget = () => {
  const [rendered, setRendered] = useState(false);
  const { t } = useTranslation();
  const { userInfo, updateUserInfo } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push("/admin");
    }
  }, [userInfo]);
  useEffect(() => {
   
    setRendered(true);
  }, []);
  if (rendered) {
    return <LoginForgetPage />;
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
export default LoginForget;
