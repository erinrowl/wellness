import "./header.css"

export default function Header() {
  return (
    <div className= "header">
        <div className = "headerTitles">
            <span className= "headerTitleSm"> Wellness+</span>
        </div>
        <img 
            className="headerImg"
            src="https://i.imgur.com/uxWRbDP.jpeg"
            alt="Field of flowers"
            />
    </div>
  );
}
