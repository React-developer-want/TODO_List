import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './Components/frontPage';
import TaskPage from './Components/taskPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/tasks-list' element={<TaskPage/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App
