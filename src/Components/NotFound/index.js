/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <>
     <section className="container mainContainer">
      <h1 className="title">Error : 404</h1>
      <p>Página não encontrada!</p>
     </section>
    </>
  );
};
