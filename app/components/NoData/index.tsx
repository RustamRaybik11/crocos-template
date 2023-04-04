import React from "react";
import { useTranslation } from "react-i18next";
import CloudIcon from "../../icons/CloudIcon";

function NoData() {
  const { t } = useTranslation();
  return (
    <div className="no-data">
      {/* <CloudIcon /> */}
      {t("not_found")}
    </div>
  );
}

export default NoData;
