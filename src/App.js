import React from 'react';
import { useState } from 'react';
import Card from './Components/card';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setTask(value);
  }
  function handleClick(){
    setTasks((prev)=>{
      return [
        ...prev,
        {
          title : task
        }
      ]
    })
    setTask('');
  }

  function handleEdit(title, id){
    handleDelete(id);
    setTask(title);
  }

  function handleDelete(id){
    const newArray = tasks.filter((val, index)=>{
      return index !== id
    })
    setTasks(newArray);
  }

  function ClearAll(){
    setTasks([]);
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>

      <h1>TODO LIST</h1>

    <div className="form-group w-50 border md-p-2 p-3">
      <label htmlFor="task">Enter your task</label>
      <input type="text" className="form-control" onChange={handleChange} value={task}/>

      <button className="btn btn-primary my-3" onClick={handleClick}>Add Task</button>

    </div>

    <button className="btn btn btn-outline-primary" onClick={ClearAll}>Clear All</button>

    <div className='mt-3 w-50 p-3'>
      
      {tasks.map((card, index)=>{
        return <Card
          key = {index}
          id = {index}
          title = {card.title}
          delete = {handleDelete}
          edit = {handleEdit}
        />
      })}

    </div>

    </div>  
  )
}

export default App
