import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import pizzawig from "./img/pizzawig.png";
import home from "./img/home.png";
import google from "./img/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";

function Header() {
  const handleLogin = async () => {
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      console.log(cred);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="header-post">
      <p id="titlesite">Pizzamwam</p>
      <img src={pizzawig} className="logomain" alt="Pizza Wig" />
      <Link to="/">
        <img id="logohome" src={home} alt="Home" />
      </Link>
      <button onClick={handleLogin} id="accmenu">
        <img src={google} className="logomain" alt="Google" />
      </button>
      <Link to="/login">
        <button className="login-button"><p>Login</p></button>
      </Link>
      <Link to="/register"> {/* Added Link to LoginScreen */}
        <button className="register-button"><p>Register</p></button>
      </Link>
    </div>
  );
}

export default Header;
