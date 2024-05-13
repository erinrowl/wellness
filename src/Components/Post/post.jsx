import "./post.css"

export default function Extrapost() {
  return (
    <div className= "post">
        <img className= "postImg" src= "https://images.pexels.com/photos/6621227/pexels-photo-6621227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Person bathtub"
    />
    <div className ="postInfo">
        <div className= "postMeal">
            <span className= "postCat">Life</span>
            
        </div>
        <span className= "postTitle">
            Self-Care
        </span>
        <hr/>
        <span className="postDate">9 hours ago</span>
    </div>
    <p className = "postDesc">
        I like to take a little time for myself throughout the week and remind
        myself to slow down. I always look forward to just grabbing a book and some tea
        and just climbing into the bathtub and simmering down.

    </p>
    </div>
  )
  
}
