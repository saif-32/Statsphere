import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header'; // Import the Header component

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });

      setCookies('access_token', result.data.token);
      window.localStorage.setItem('userID', result.data.userID);

      // Show pop-up or alert message upon successful login
      alert('Login successful!'); // You can customize this message or use a pop-up library

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <div className="login-container">
        <div className="login-form">
          <h1>{isRegistering ? 'Register' : 'Login'} to Your Account</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {!isRegistering && (
            <p>
              Don't have an account?{' '}
              <Link to="/register">Register here</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
