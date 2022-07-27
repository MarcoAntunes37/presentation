import React from 'react';
import './approach.css'

function CompetenceApproach(props) {
  return (
    <div className='approach-item'>        
        <p>{props.name}</p>
        <p>Confiança: {props.confidence}</p>
    </div>
  )
}

export default CompetenceApproach