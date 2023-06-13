import './App.css';
import Footer from './footer';
import pizzawig from "./img/pizzawig.png"
import home from "./img/home.png"
import google from "./img/google.png"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firestore, googleProvider } from "./config/firebase";
import Post from './post';
import Header from './Header';
import React from 'react';
import SearchBar from './SearchBar';
import firebase from 'firebase/app';
import 'firebase/firestore';


 
function App() {
  
  const handleSearch = (searchTerm) => {
    // Perform the search using Firebase
    const usersRef = firestore.ref('users');

    usersRef
      .orderByChild('name')
      .startAt(searchTerm)
      .endAt(`${searchTerm}\uf8ff`)
      .once('value', (snapshot) => {
        const searchResults = [];
        snapshot.forEach((childSnapshot) => {
          const user = childSnapshot.val();
          searchResults.push(user);
        });
        console.log('Search results:', searchResults);
        // Do something with the search results
      });
  };
  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(firestore, 'posts'));
  //       const newData = querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log(newData);
  //     } catch (error) {
  //       console.log('Error fetching data:', error);
  //     }
  //   };
 
  //   getUsers();
  // }, []);

//   const dataRef = useRef()
//   const submithandler = (e) => {
//     e.preventDefault()
//     handleSubmit(dataRef.current.value)
//     dataRef.current.value = ""
//   }


 
  return (
     <div className="App">
  <Header />
  <h1>Search App</h1>
      <SearchBar onSearch={handleSearch} />
  <Post />
  <Footer />

</div>
  );
}
 
export default App;