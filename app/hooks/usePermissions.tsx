import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { IPermissions } from "../constants/interfaces";
import { useLoadingContext } from "../context/loading";
import { PermissionsService } from "../services/PermissionsService";
import { LocalStorageHandler } from "../utils/localStorageHandler";

const usePermissions = () => {
  const {t} = useTranslation()
  const [permissions, setPermissions] = useState<Array<IPermissions>>([]);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    LocalStorageHandler.getUserToken() &&
    PermissionsService.getAllPermissions()
      .then((response) => {
        setPermissions(response.data.data);
      })
      .catch((err) => console.log(err.response))
      .finally(() => setIsLoading(false));
  }, []);

  return [permissions];
};

export default usePermissions;
