import React from 'react';
import PageData from '../../data/Page';
import './approach.css'

function CompetenceApproach(props) {
  return (
    <div className='approach-item'>        
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

export default CompetenceApproach