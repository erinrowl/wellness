import Header from '../header/header';
import Posts from "../Posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import "./home.css";
import Post from "../Post/post";
import Hobbies from "../Hobbies/Hobbies";

export default function Home() {
  return (
    <>
    
       <Header/> 
       <div className="home">
       <Posts />
       <Post />
       <Sidebar />
       <Hobbies />
       
       
    </div>
  

    
    </>
  );
}
