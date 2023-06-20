import React, { useState } from 'react';
import { firestore } from './config/firebase';
import './searchbar.css';


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    // Perform the search query using Firebase
    const dbRef = firestore.database().ref('./config/firebase'); // Replace with your own database path
    dbRef
      .orderByChild('name')
      .equalTo(searchQuery)
      .once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const results = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div class = "searchbar">
      <form onSubmit={handleSearch}>
        <input id='inputsearch'
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit"id='searchbutton'>Search</button>
      </form>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <div class = "textsearch"><p>Nothing</p>
        </div>
      )}
    </div>
  );
};

export default Search;
