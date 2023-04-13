import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { LoginForm } from './LoginForm'
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset} from './LoginPasswordReset';
import {  User } from '../User';

import { UserContext } from '../../UserContext';

import styles from './Login.module.css';

export const Login = () => {

  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/Conta" />;

  return (
    <>
      <section className={styles.login}>
        <div className={styles.forms}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="criar" element={<LoginCreate />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
            <Route path="conta" element={<User />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

