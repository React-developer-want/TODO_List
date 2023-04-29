import React from 'react';

const Card = (props) => {
  return (
    <>
    <div className='w-full border border-top-0 border-left-0 border-right-0 p-2 my-3'>
      
      <div className="input-group mb-3 ">

        <div className="input-group-prepend ">

          <div className="input-group-text">

            <input type="checkbox" aria-label="Checkbox for following text input"/>

          </div>

        </div>

        <label className='ml-2' htmlFor="check">{props.title}</label>

      </div>

      <div className='w-full'>

          <button className="btn btn-success btn-lg mb-2 mr-2" onClick={()=> props.edit(props.title, props.id)}>Edit</button>

          <button className="btn btn-danger btn-lg " onClick={()=> props.delete(props.id)}>Delete</button>

      </div>

    </div>
    </>
  )
}

export default Card
