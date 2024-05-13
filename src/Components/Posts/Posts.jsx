import "./posts.css"

export default function Post() {
  return (
    <div className= "post">
        <img className= "postImg" src= "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Meal Prep"
    />
    <div className ="postInfo">
        <div className= "postMeal">
            <span className= "postCat">Food</span>
            
        </div>
        <span className= "postTitle">
            Weekly Meal Prep
        </span>
        <hr/>
        <span className="postDate">3 hours ago</span>
    </div>
    <p className = "postDesc">
        Enjoy your pre-made meals whenever you are on the go! I like to prepare my meals
        so that I save time, money, and energy. My favorite meals in my rotation right now
        include protein bowls, salads, and overnight oats for breakfast. Meal planning
        keeps me organized and also can be sustainable which is a major plus!

    </p>
    </div>
  )
}
