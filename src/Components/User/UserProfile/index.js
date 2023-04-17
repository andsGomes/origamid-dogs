import React from "react";
import { Feed } from "../../Feed/Feeds";
import styles from "./UserProfile.module.css";
import { useParams } from "react-router-dom";
import { Head } from "../../Helper/Head";

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <>
    <Head title={user} />
      <section className="container nainSection">
        <h1 className="title">{user}</h1>
        <Feed user={user} />
      </section>
    </>
  );
};
