import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login button clicked');
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Login to Your Account</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
