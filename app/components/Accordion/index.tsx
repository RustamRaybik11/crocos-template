import { useTranslation } from "next-i18next";
import React, { useState } from "react";


type Props = {
  heading: string;
  children: React.ReactNode;
  isOpen?: boolean
};
const Accordion: React.FC<Props> = ({ heading, children, isOpen = false }) => {
  const {t} = useTranslation()
  const [isActive, setIsActive] = useState(isOpen);
  return (
    <li className="accordion-item">
      <div
        className={`accordion-toggle ${
          isActive ? "accordion-toggle-active" : ""
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <h3>{heading}</h3>
        <span className={isActive ? "accent" : "primary"}>
          {isActive ? `${t("hide")}` : `${t("show")}`}
        </span>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </li>
  );
};

export default Accordion;
