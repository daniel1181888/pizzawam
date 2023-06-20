import React, { useState } from 'react';
import handleRegister from './handles/handleregister';
import Footer from './footer';
import Header from './Header';
import './register.css';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = () => {
    handleRegister(email, password)
      .then((user) => {
        // Registration successful
        console.log('Registration successful:', user);
      })
      .catch((error) => {
        // Registration failed
        console.error('Registration failed:', error);
      });
  };

  return (
    <>
      <Header />
      <div className="register-screen">
        <h2>Register</h2>
        <form className="register-form">
          <label className="form-label">
            <input
              placeholder='username'
              className="form-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            <input
              placeholder='email moet echt email zijn'
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            <input
              placeholder='password min 6 tekens'
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="register-button" type="button" onClick={handleRegisterClick}>
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterScreen;
