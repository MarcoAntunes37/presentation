import React from 'react';
import './nosql.css'

function CompetenceNoSqlDatabase(props) {
  return (
    <div className='nosql-item'>
        <p>{props.name}</p>
        <p>Confiança: {props.confidence}</p>
    </div>
  )
}

export default CompetenceNoSqlDatabase;