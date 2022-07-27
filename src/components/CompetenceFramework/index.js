import React from 'react';
import './framework.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CompetenceFramework(props) {
  return (
    <div className='framework-item'>
        <FontAwesomeIcon 
          icon={props.icon}
        />      
        <p>{props.name}</p>
        <p>Confiança: {props.confidence}</p>
    </div>
  )
}

export default CompetenceFramework;