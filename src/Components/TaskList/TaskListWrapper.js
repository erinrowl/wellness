import React, {useState} from 'react'
import {TaskList} from "./TaskList";
import { TaskListForm } from './TaskListForm'
import { v4 as uuidv4 } from 'uuid';


export const TaskListWrapper = () => {
    const [tasklists, setTaskLists] = useState([])

    const addTaskList = tasklist => {
        setTaskLists([...tasklists, {id: uuidv4(), task: tasklist,
        completed: false, isEditing: false}])
        console.log (tasklists)
    }
    const toggleComplete = id => {
      setTaskLists(tasklists.map(tasklist => tasklist.id === id ? {...
        tasklist, completed: !tasklist.completed} : tasklist))
    }
    const deleteTaskList = id => {
      setTaskLists(tasklists.filter(tasklist => tasklist.id !== id))
    }
  return (
    <div className= 'TaskListWrapper'>
      
        <TaskListForm  addTaskList={addTaskList} />
        {tasklists.map ((tasklist, index) => (
            <TaskList task= {tasklist} key = {index}
            toggleComplete={toggleComplete} deleteTaskList = {deleteTaskList} />
        ))}
        <TaskList />
    </div>
  )
}
