import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Login.module.css'; 
import Header from "@/Components/Header";
import Link from 'next/link';
import { login } from '@/Functions/Login';



const Login: React.FC = () => {
  const [loginResponse, setLoginResponse] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (loginResponse) {
      localStorage.setItem('token', token);
      window.location.href = '/';
    }
  }, [loginResponse]);

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <Header />
        <h1>login</h1>
        <p>{loginError}</p>
        <form id="login" onSubmit={(e) => login(e, setLoginResponse, setLoginError, setToken)}>
            <input type="text" placeholder='email' id="login-email"/>
            <input type="password" placeholder='Password' id="login-password"/>
            <button type="submit" className={styles.button_login}>Login</button>
        </form>
        <Link href="/register"><button className={styles.button_login}>Go to register</button></Link>
      </main>
    </div>
  );
};

export default Login;
