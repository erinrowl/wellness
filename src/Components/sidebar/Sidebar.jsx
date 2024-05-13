import './sidebar.css'

export default function Sidebar() {
  return (
    <div className= "sidebar">
     <div className="sidebarItem">
        <span className = "sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/8436763/pexels-photo-8436763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt = "Two women doing exercices outdoors"

        />
    </div>
    <div className= "sidebarItem">
    <span className = "sidebarTitle">CATEGORIES</span> 
    <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Astrology</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Hobbies</li>
        <li className="sidebarListItem">Food</li>
        <li className="sidebarListItem">Tech</li>
    </ul>
    </div>
    <div className = "sidebarItem">
        <span className ="sidebarTitle">FOLLOW ME</span>
    <div className= "sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-tiktok"></i>
    </div>
    </div>
    </div>
  )
}
