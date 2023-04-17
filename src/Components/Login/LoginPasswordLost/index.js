import React from "react";
import { Input } from "../../Form/Input/Index";
import { Button } from "../../Form/Button/Index";
import { Error } from "../../Helper/Error";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import styles from "./LoginPasswordLost.module.css";
import { PASSWORD_LOST } from "../../../api";
import { Head } from "../../Helper/Head";

export const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubimit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className="animeLeft">
      <Head title='Perdeu a senha' />
      <h3 className="title"> Perdeu a Senha? </h3>
      {data ? (
        <p  style={{ color: '#010035'}} className="animeLeft">{data}</p>
      ) : (
        <form onSubmit={handleSubimit}>
          <Input label="Email / Usuario" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando ... </Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};
