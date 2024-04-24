import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/auth/register', {
        firstName,
        lastName,
        email,
        username,
        password,
      });
      // Set registration success message
      setRegistrationSuccess(true);
      // Clear input fields after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="register-form">
          <h1>Create Your Account</h1>
          {registrationSuccess && (
            <div className="success-message">Registration completed! Now you can <Link to="/login">login</Link>.</div>
          )}
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
