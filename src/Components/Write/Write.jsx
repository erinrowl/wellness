import "./write.css";
import Todo from "../Todo List/Todo";
import { TaskListWrapper } from "../TaskList/TaskListWrapper";

//Method for Writing a post
export default function Write() {
  return (
    <div className = "write">
        <img
          className= "writeImg"
          src= "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt= "Notebook and pen"
          />
         
        <form className="writeForm">
          <div className= "writeFormGroup">
            <label htmlFor="fileinput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type = "file" id = "fileinput" style= {{display:"none"}}/>
            <input type ="text" placeholder="Title" className="writeInput" autoFocus= {true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder= "Tell your story..." 
            type = "text"
             className= "writeInput writeText"
             ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
        <h2>
          Organize with Me!
        </h2>
        <div>
          <TaskListWrapper />
          <Todo />
         
        </div>
    </div>
  )
}
