import React, { useRef, useState } from 'react';
import './footer.css';
import handleSubmit from './handles/handlesubmit';

function getUserId() {
 
}

function Footer() {
  const [isPrivate, setIsPrivate] = useState(false);
  const descriptionRef = useRef();
  const dataRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const testData = dataRef.current.value;
    const description = descriptionRef.current.value;

    const userId = getUserId();

    handleSubmit(testData, description, isPrivate, userId);

    dataRef.current.value = '';
    descriptionRef.current.value = '';
  };

  const handlePrivacyChange = (e) => {
    setIsPrivate(e.target.checked);
  };

  return (
    <footer>
      <form onSubmit={submitHandler}>
        <div className="postinputfields">
          <input className="input-post" placeholder="Post title" type="text" ref={dataRef} />
          <input className="input-post" placeholder="Post description" type="text" ref={descriptionRef} />
        </div>
        <div className="privacy-checkbox">
          <label htmlFor="private-checkbox">Private:</label>
          <input
            id="private-checkbox"
            type="checkbox"
            checked={isPrivate}
            onChange={handlePrivacyChange}
          />
        </div>
        <button id="post-button" type="submit">Post</button>
      </form>
    </footer>
  );
}

export default Footer;
