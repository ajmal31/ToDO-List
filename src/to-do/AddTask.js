import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const [value,setvalue]=useState('')
  const addItem=(()=>{
    addTask(value)
    setvalue('')
           
  })
  return (
    <>
      <div className='input-container' >
        <input type='text' value={value} placeholder='Add New Task' className='input'
        
        onChange={(e)=>(setvalue(e.target.value))} 
        />
        <button onClick={addItem} className='add-btn'>Add</button>
      </div>
    </>
  )
}
export default AddTask

