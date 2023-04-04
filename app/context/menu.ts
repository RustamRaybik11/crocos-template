import { createContext, useContext, useEffect, useState } from "react";

export const useMenu = () => {
  
  const [activeMenu, setActiveMenu] = useState(false);
  
  return { activeMenu, setActiveMenu };
};

export const MenuContext = createContext<any>(null);

export const useMenuContext = () => {
  return useContext(MenuContext);
};
