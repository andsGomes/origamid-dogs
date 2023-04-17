import React from "react";
import { Feed } from "../Feed/Feeds";
import { Head } from "../Helper/Head";

export const Home = () => {
  return (
    <>
      <section className="container mainContainer">
        <Head title="Fotos" description="" />
        <Feed />
      </section>
    </>
  );
};
