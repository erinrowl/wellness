import React, {useState} from 'react'

export const TaskListForm = ({addTaskList}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTaskList(value)

        setValue("")


    }
  return (
    <form className = 'TaskListForm' onSubmit = {handleSubmit}>
        <input type = "text" className = 'tasklist-input' value= {value}
        placeholder = 'What is the task today?' onChange= 
        {(e) => setValue (e.target.value)}/>
        <button type = 'submit' className='tasklist-btn'> Add Task </button>
    </form>
  )
}
