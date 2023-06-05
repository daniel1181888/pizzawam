import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useEffect, useRef, useState } from 'react';
import { firestore } from "./config/firebase"
import { getDocs, collection } from "firebase/firestore";
import pizzawig from "./img/pizzawig.png"
import home from "./img/home.png"



 
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'posts'));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(newData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
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

  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
 
  return (
    <div className="App">
      <div class = "header-post"> <p id = "titlesite">Pizzamwam</p> 
      <img src={pizzawig} class="logomain"></img>
      <p id = "homemenu">home</p>
      <img id = "logohome" src={home}></img>
      <p id = "accmenu">account</p>
      </div>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">post</button>
        <p>post page</p>
      </form>
      <p>User List</p>
        {data.map((posts) => (
          <p>{posts.titel} </p>
        ))}
    </div>
  );
}
 
export default App;