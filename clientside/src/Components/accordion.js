import React from 'react'

const Accordion = (props) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={"flush-heading" + props.id}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+props.id} aria-expanded="false" aria-controls={"flush-collapse"+props.id}>
        <span className='w-50 text-truncate'>{props.title}</span>
      </button>
    </h2>
    <div id={"flush-collapse"+props.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading"+props.id} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <strong>{props.title}</strong>
        <p> 👉 {props.description}</p>
        <button type="button" className="btn btn-outline-secondary btn-sm mx-2" onClick={props.handleEdit}>Edit Task</button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={props.handleDelete}>Delete Task</button>
      </div>
    </div>
  </div>
);

export default Accordion