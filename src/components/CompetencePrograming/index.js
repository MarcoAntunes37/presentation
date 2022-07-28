import React from 'react';
import PageData from '../../data/Page';
import './programing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CompetencePrograming(props) {
  return (
    <div className='programing-item'>
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

export default CompetencePrograming;