import "./topbar.css"
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className = "top">
        <div className = "topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-tiktok"></i>

        </div>
        <div className = "topCenter">
            <ul className= "topList">
                <li className= "topListItem">
                 <Link to = "/">HOME</Link>   
                </li>
                <li className= "topListItem"><Link className= "link" to= "/About">ABOUT</Link></li>
                <li className= "topListItem"><Link className= "link" to ="/Write">WRITE</Link></li>

            </ul>
        
        </div>

        <div className = "topRight">
        <img 
            className="topImg"
            src= "https://images.pexels.com/photos/3621182/pexels-photo-3621182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt= "Woman jogging seaside" 
             />
             <i className= "topSearchIcon fas fa-search"></i>
             
        </div>
    </div>   
        
  );
}
