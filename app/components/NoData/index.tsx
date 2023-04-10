import React from "react";
import { useTranslation } from "react-i18next";

function NoData() {
  const { t } = useTranslation();
  return (
    <div className="no-data">
      {t("not_found")}
    </div>
  );
}

export default NoData;
