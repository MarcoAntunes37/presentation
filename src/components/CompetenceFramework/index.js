import React from 'react';
import './framework.css'
import PageData from '../../data/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CompetenceFramework(props) {
  return (
    <div className='framework-item'>
        <FontAwesomeIcon 
          icon={props.icon}
        />      
        <p>{props.name}</p>
        <p>
          {
            PageData[props.language]
              .section[13]
          }: {props.confidence}
        </p>
    </div>
  )
}

export default CompetenceFramework;