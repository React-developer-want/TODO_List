/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../Utils/localStorage';
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const [userName, setUserName] = useState('');
  const localUserName = getLocalStorageItem('username');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalStorageItem('username', userName);
    navigate('/tasks-list');
  }

  useEffect(()=> {
    if(localUserName){
      navigate('/tasks-list');
    }
  },[]);

  return (
    <div style={{height:'100vh'}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalToggleLabel">Choose a username</h5>
          </div>
          <form className="modal-body" onSubmit={handleSubmit}>
            <input className="form-control form-control-lg" type="text" maxLength={20} value={userName} onChange={(e)=> setUserName(e.target.value.toUpperCase())} placeholder="Enter a username"/>
            <button className={`btn btn-primary my-4 ${!!userName ? 'visible': 'invisible'}`} onClick={handleSubmit}>Confirm</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FrontPage
