import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { navigate, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [_, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();



    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password
      });

      setCookies('access_token', response.data.token)
      window.localStorage.setItem("userID", response.data.userID)
      navigate('/')
      
    } catch (err) {
      console.error(err)
    }

  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Login to Your Account</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
