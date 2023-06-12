import React from 'react';
import './footer.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';



function Footer() {

  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }



  return (
    <footer>
       <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">post</button>
      </form>
    </footer>
  );
}

export default Footer;