//app/login/page.js
'use client';

import React, { useState } from 'react';
import {Input} from "@nextui-org/react";
import styles from '../../styles/login.module.css'; // Import the CSS module

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login clicked', { email, password });
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.inputBox}> 
          <input className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>  
        <div className={styles.rememberMe}>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <p className={styles.signupPrompt}>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default LoginPage;
