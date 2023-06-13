import React from 'react';
import './footer.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';



function Footer() {
  const descriptionRef = useRef();
  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    
    const testData = dataRef.current.value;
    const description = descriptionRef.current.value;

    handleSubmit(testData, description)

    dataRef.current.value = "";
    descriptionRef.current.value = "";
  }



  return (
    <footer>
       <form onSubmit={submithandler}>
        <div className='postinputfields'>
          <input className='input-post' placeholder='post title' type= "text" ref={dataRef} />
          <input className='input-post' placeholder='post beschrijving' type= "text" ref={descriptionRef} />
        </div>
        <button id="post-button"type = "submit">post</button>
      </form>
    </footer>
  );
}

export default Footer;