import React, {useState} from 'react';
import './graduation.css'

function CompetenceFormation(props) {
  const [show, setShow] = useState(false);

  const handleClick = event => {
    setShow(current => !current);
  };

  return (
      <div className='graduation-item'>
        <p className='graduation-text'>{props.course}</p>    
        <p className='graduation-text'>{props.hours}</p>
        {
          show && (
            <div className='graduation-text grade'>{props.grade}</div>
          )
        }
        <button className='grade-button' onClick={handleClick}>Mostrar Grade</button>
        <p className='graduation-text'>{props.instituition}</p>
        <p className='graduation-text'>{props.completed}</p>
      </div>
  )
}

export default CompetenceFormation;