import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import pizzawig from "./img/pizzawig.png";
import home from "./img/home.png";
import google from "./img/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";
import Search from './Search';

function Header({ user, handleLogin }) {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName ? user.displayName : user.email);
    }
  }, [user]);

  return (
    <div className="header-post">
      <p id="titlesite">Pizzamwam</p>
      <img src={pizzawig} className="logomain" alt="Pizza Wig" />
      <Link to="/">
        <img id="logohome" src={home} alt="Home" />
      </Link>
      {user ? (
        <div className='userbox'><p>Welcome, {displayName}</p></div>
      ) : (
        <div className='userbox'><p>User</p></div>
      )}
      <div className="search-container">
        <Search />
      </div>
      <button onClick={handleLogin} id="accmenu">
        <img src={google} className="logomaingoogle" alt="Google" />
      </button>
      <Link to="/login">
        <button className="login-button"><p>Login</p></button>
      </Link>
      <Link to="/register">
        <button className="register-button"><p>Register</p></button>
      </Link>
    </div>
  );
}

function HeaderContainer() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return <Header user={user} handleLogin={handleLogin} />;
}

export default HeaderContainer;
