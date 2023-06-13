import React, { useEffect, useState } from 'react';
import { firestore } from "./config/firebase"
import 'firebase/firestore';
import './post.css';
import { getDocs, collection } from "firebase/firestore";

const Post = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'posts'));
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          beschrijving: doc.data().beschrijving,
          testData: doc.data().testData
        }));
        console.log(newData)
        setData(newData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="post">
      {data.map((post) => (
        <div key={post.id} className="post-tile">
          { console.log(post) }
          <p className="post-title"> {post.testData}</p>
          <p className="post-description">{post.beschrijving}</p>
          {/* Add any additional post content here */}
        </div>
      ))}
    </div>
  );
};

export default Post;
