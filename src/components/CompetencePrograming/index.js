import React from 'react';
import './programing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CompetencePrograming(props) {
  return (
    <div className='programing-item'>
        <FontAwesomeIcon 
          icon={props.icon}
        />
        <p>{props.name}</p>
        <p>Confiança: {props.confidence}</p>
    </div>
  )
}

export default CompetencePrograming;