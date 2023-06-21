import './App.css';
import Footer from './footer';
import pizzawig from "./img/pizzawig.png"
import home from "./img/home.png"
import google from "./img/google.png"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";
import Post from './post';
import Header from './Header';
import Search from './Search';




 
function App() {
  
  
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
  <Post />
  <Footer />
</div>
  );
}
 
export default App;