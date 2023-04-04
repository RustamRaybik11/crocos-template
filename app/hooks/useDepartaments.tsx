import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useLoadingContext } from "../context/loading";
import { RolesService } from "../services/RolesService";
import { UsersService } from "../services/UsersService";
import { IRole } from "../types/types";

const useDepartaments = () => {
  const { t } = useTranslation();
  const [departaments, setDepartaments] = useState<Array<IRole>>([]);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    UsersService.getDepartaments()
      .then((response) => {
        setDepartaments(response.data.data);
      })
      .catch((err) => console.log(err.response))
      .finally(() => setIsLoading(false));
  }, []);

  return [departaments];
};

export default useDepartaments;
