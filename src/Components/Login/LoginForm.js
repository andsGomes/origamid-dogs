import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../Form/Input/Index";
import { Button } from "../Form/Button/Index";
import { Error } from "../Helper/Error";
import useForm from "../../Hooks/useForm";


import { UserContext } from '../../UserContext';

import styles from './LoginForm.module.css';
import style from '../Form/Button/Button.module.css'
import { Head } from "../Helper/Head";



export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
          userLogin(username.value, password.value); 
    }
  }

  return (
    <>
    <Head title='Login' />
      <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={ styles.form } onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error}/>
        </form>
        <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a Senha?</Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to="/login/criar" className={style.button}>Cadastro</Link>
        </div>
        
      </section>
    </>
  );
};
