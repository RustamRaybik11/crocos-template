import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { IUser } from "../constants/interfaces";
import { useLoadingContext } from "../context/loading";
import { UsersService } from "../services/UsersService";

const useUsers = (filter = "") => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<Array<IUser>>([]);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    UsersService.getUsers(filter)
      .then((response) => {
        console.log(response);

        setUsers(response.data.data);
      })
      .catch((err) => console.log(err.response))
      .finally(() => setIsLoading(false));
  }, []);

  return users;
};

export default useUsers;
