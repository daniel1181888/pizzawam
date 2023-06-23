import React, { useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './config/firebase';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    if(event.code === "Enter") {
      // alert(event.target.value);

      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("testData", "==", event.target.value));
      let newData;
      
      getDocs(q)
        .then((querySnapshot) => {
          newData = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
          console.log(newData);
        });
    }

    // Perform the search query using Firestore
    // const dbRef = firestore.collection('posts'); // Replace 'yourCollection' with your actual collection name
    // dbRef
    //   .where('name', '==', searchQuery)
    //   .get()
    //   .then((querySnapshot) => {
    //     if (!querySnapshot.empty) {
    //       const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //       setSearchResults(results);
    //     } else {
    //       setSearchResults([]);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="searchbar">

      <input
        id="inputsearch"
        type="text"
        onKeyDown={handleSearch}
      />
      <button type="submit" id="searchbutton">
        Search
      </button>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <div className="textsearch">
          <p>Nothing</p>
        </div>
      )}
    </div>
  );
};

export default Search;
