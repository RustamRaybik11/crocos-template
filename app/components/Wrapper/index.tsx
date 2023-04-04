import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IBreadscrumb } from "../../constants/interfaces";
import { useLoadingContext } from "../../context/loading";
import Preloader from "../Preloader/Preloader";

import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
  title?: string;
  isContacts?: boolean;
  user?: string;
  breadscrumbs?: IBreadscrumb;
};

const Wrapper: React.FC<Props> = ({ children, title, user, breadscrumbs }) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoadingContext();

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title key="title">
          {title
            ? title
            : "Шаблон для Crocos"}
        </title>
      </Head>
      {isLoading && <Preloader />}

      <div className="main__wrapper">
        <div className="main__container">
          <Header />
          <div className="container">
            <div className="main__content ">
              <div>{children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Wrapper;
