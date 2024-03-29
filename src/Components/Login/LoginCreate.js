import React from 'react'
import useForm from "../../Hooks/useForm";

import { Input } from '../Form/Input/Index';
import { Button } from '../Form/Button/Index';
import { Error } from '../Helper/Error';

import { USER_POST } from '../../api';

import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import { Head } from '../Helper/Head';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    console.log(response);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title='Cadastro' />
      <h1 className="title">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando ... </Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
