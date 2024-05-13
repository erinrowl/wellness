import "./hobbies.css";

export default function Post() {
  return (
    <div className= "post">
        <img className= "postImg" src= "https://images.pexels.com/photos/1248437/pexels-photo-1248437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Two people exploring forest"
    />
    <div className ="postInfo">
        <div className= "postMeal">
            <span className= "postCat">Hobbies</span>
            
        </div>
        <span className= "postTitle">
            Hiking
        </span>
        <hr/>
        <span className="postDate">1 week ago</span>
    </div>
    <p className = "postDesc">
       Keeping up with cardio is something I always strive for. I know that one of
       my favorite hobbies is hiking and has helped to step our of my shell
       and see the world. I am more close to nature becuase of it and have 
       gained much respect for the world around me. Check out my recent trips
       on my Instagram!

    </p>
    </div>
  )
}