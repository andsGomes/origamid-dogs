import React from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

import style from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <Dogs />
      <p>Dogs - Alguns direitos reservados.</p>
    </div>
  );
};
