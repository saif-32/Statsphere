import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/auth/register', {
        username,
        password,
      });
      alert('Registration Completed! Now login.');
      setIsRegistering(false); // Switch back to login form after registration
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>{isRegistering ? 'Register' : 'Login'} to Your Account</h1>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
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
          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </form>
        <p>
          {isRegistering
            ? 'Already have an account?'
            : 'Don\'t have an account?'}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Login here' : 'Register here'}
          </button>
        </p>
      </div>
    </div>
  );
};
