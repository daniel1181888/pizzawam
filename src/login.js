import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase';
import Header from './Header';
import Footer from './footer';
import './register.css'; // Import the shared CSS file

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Login successful:', user);
        // Redirect to home page or perform any other actions
      })
      .catch((error) => {
        // Login failed
        console.error('Login failed:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="register-screen">
        <h2>Login</h2>
        <form className="register-form">
          <label className="form-label">
            <input
              placeholder="email"
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            <input
              placeholder="password"
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="register-button" type="button" onClick={handleLoginClick}>
            Login
          </button>
        </form>
        <Link to="/register">Register</Link>
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;
