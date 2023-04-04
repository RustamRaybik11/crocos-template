import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useLoadingContext } from "../context/loading";
import { HandbooksService } from "../services/Handbooks";
import { RolesService } from "../services/RolesService";
import { IRole } from "../types/types";

const useMenuSections = () => {
  const { t } = useTranslation();
  const [sections, setSections] = useState<Array<IRole>>([]);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    HandbooksService.getHandbookSections()
      .then((response) => {
        setSections(response.data.data);
      })
      .catch((err) => console.log(err.response))
      .finally(() => setIsLoading(false));
  }, []);

  return [sections];
};

export default useMenuSections;
