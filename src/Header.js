import './App.css';
import pizzawig from "./img/pizzawig.png"
import home from "./img/home.png"
import google from "./img/google.png"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";


function Header() {
    const handlelogin = async () => {
        try {
        const cred = await signInWithPopup(auth,googleProvider);
        console.log(cred);
        } catch (e){
          console.error(e);
        }
      };



  return (
    <div class = "header-post"> <p id = "titlesite">Pizzamwam</p> 
      <img src={pizzawig} class="logomain"></img>
      <p id = "homemenu">home</p>
      <img id = "logohome" src={home}></img>
      <button onClick={handlelogin} id = "accmenu"><img src={google} class="logomain"></img></button>
      <button  class="login-button"><p>login</p></button><button  class="register-button"><p>register</p></button>
      </div>
  );
}

export default Header;