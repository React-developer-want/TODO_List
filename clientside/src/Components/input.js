import React from 'react'

const Input = (props) => {

  const handleChange = (e) => {
    const { value } = e.target;
    props.onChange(value);
  }

  return (
    <div className={"input-group " + props.className}>
      {props.label ?? <label htmlFor="input">{props.label}</label>}
      {props.type === 'textArea' ?
        <textarea 
          className="form-control"
          aria-label={props.areaLabel}
          value={props.value}
          onChange={handleChange}
          placeholder={props.placeholder}
        /> :
        <input 
        type={props.type} 
        className="form-control" 
        placeholder={props.placeholder} 
        aria-label={props.areaLabel}
        value={props.value}
        onChange={handleChange}
        aria-describedby="basic-addon1"
        />
      }
    </div>
  )
}

export default Input
