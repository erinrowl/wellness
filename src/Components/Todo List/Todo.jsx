import Post from "../Post/post2";
import axios from "axios";
import { useState, useEffect } from "react";
import './todo.css';
//Attempted CRUD
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      
      <div className="container">
        <h2 className="subtitle text-left text-accept">Posts</h2>

        <ul>
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              date={getRandomDate()}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
//utility function
const getRandomDate = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day - getRandomNumber(1, 6)} / ${
    month - getRandomNumber(1, 6)
  } / ${year}}`;
};