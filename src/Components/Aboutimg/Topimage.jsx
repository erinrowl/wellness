import "./topimage.css"

export default function Header() {
  return (
    <div className= "header">
        <div className = "headerTitles">
            <span className= "headerTitleSm"> My Fitness Journey</span>
        </div>
        <img 
            className="headerImg"
            src="https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Beach sunset"
            />
    </div>
  );
}
