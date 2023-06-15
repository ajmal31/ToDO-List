import React, { useState } from 'react'
import  AddTask from './AddTask'
import  ListTask  from './ListTask'
import "./Todo.css"; 


 const ToDo = () => {
    const [task,setTask]=useState([
       
    ])
    const addTask=((title)=>{
        const newTask=[...task,{title}]
        setTask(newTask)

    })
    const removeTask=((index)=>{
        const newTask=[...task]
        newTask.splice(index,1)
        setTask(newTask)
    })
  return (
    <>
        <div className='todo-container' >
            <div className='header'>to-do-app</div>
            <div className='add-task'>
                <AddTask addTask={addTask} />
            </div>
            <div className='list-task'>
                {task.map((task,index)=>(
            
                  <ListTask task={task} key={index} removeTask={removeTask} index={index} />

                ))}
               
            </div>
        </div>
        
    </>
  )
}
export default ToDo
