import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useLoadingContext } from "../context/loading";
import { RolesService } from "../services/RolesService";
import { IRole } from "../types/types";

const useRoles = () => {
  const {t} = useTranslation()
  const [roles, setRoles] = useState<Array<IRole>>([]);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    RolesService.getRoles()
      .then((response) => {
        setRoles(response.data.data);
      })
      .catch((err) => console.log(err.response))
      .finally(() => setIsLoading(false));
  }, []);

  return [roles];
};

export default useRoles;
