/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getLocalStorageItem, remvoveLocalStorageItem } from '../Utils/localStorage';
import {mapTodoData} from '../data/todoData';
import Input from './input';
import Header from './header';
import Accordion from './accordion';
import { useNavigate } from 'react-router-dom';
import { createUserTask, deleteUserTask, getUserTasks } from '../Services/tasks';
import Spinner from './spinner';
import { sendErrorNotification, sendSuccessNotification } from '../Services/notification';

const TaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoDataForm, setTodoDataForm] = useState(mapTodoData([]));
  const [isLoading, setLoading] = useState(false);
  const localUserName = getLocalStorageItem('username');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      title, description
    };

    const result = await createUserTask(task);
    if(result.status === 'SUCCESS'){
      sendSuccessNotification('Successfully added new task');
    }else {
      sendErrorNotification('Failed to add new task');
    }
    fetchUserData();
  }

  const handleNewUser = () => {
    remvoveLocalStorageItem('username');
    navigate('/');
  } 

  const handleDelete = async (taskId) => {
    setLoading(true);
    const result = await deleteUserTask(taskId);
    if(result.status === 'SUCCESS'){
      sendSuccessNotification('Successfully deleted task');
    } else {
      sendErrorNotification('Failed to delete task');
    }
    fetchUserData();
  }

  const handleEdit = (taskId, index) => {
    const { title, description } = todoDataForm.allTasks[index];
    setTitle(title);
    setDescription(description);
    handleDelete(taskId);
  }

  const fetchUserData = async () => {
    setLoading(true);
    const {response} = await getUserTasks();
    setTodoDataForm(mapTodoData(response))
    setLoading(false);
  };

  useEffect(()=>{
    if(!localUserName){
      navigate('/');
    }else{
      fetchUserData();
    }
  },[]);

  const formComponents = {
    taskInput: (key, props) => <Input key={key} {...props} value={title} onChange={(value) => setTitle(value)} />,
    description: (key, props) => <Input key={key} {...props} value={description} onChange={(value) => setDescription(value)} />
  };

  return ( 
    <>
    <h1 className='text-center mb-4 position-sticky top-0 bg-white' style={{zIndex:'1'}}>TODO LIST</h1>

    <hr/>
    
    <Header value={localUserName ?? ''} />

    <hr className='mb-2'/>

    <form className="container form-group border md-p-2 p-3" onSubmit={handleSubmit}>
      
      {todoDataForm.inputComponents.map(({component, details}, index)=> {
        const key =  `form-component-${index}`;
        return formComponents[component](key, details);
      })}
      
      <button type='submit' className={`btn btn-primary my-3 ${!!title && !!description ? 'visible' : 'invisible'}`} onClick={handleSubmit}>Add Task</button>
      <button className="btn btn-outline-secondary mx-3" onClick={handleNewUser}>New User</button>

    </form>

    <hr className='my-4'/>

    { isLoading ? <Spinner/> :
      <div className="container overflow-auto accordion accordion-flush" id="accordionFlushExample" style={{height:"328px"}}>
      
      {todoDataForm.allTasks?.map((card, index)=>{
        return <Accordion
          key = {index}
          id = {index}
          title = {card.title}
          description = {card.description}
          handleDelete = {()=> handleDelete(card?._id)}
          handleEdit = {()=> handleEdit(card?._id, index)}
        />
      })}

    </div>}
    </>
  )
}

export default TaskPage
