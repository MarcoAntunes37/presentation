import React from 'react';
import './nosql.css'
import PageData from '../../data/Page';

function CompetenceNoSqlDatabase(props) {
  return (
    <div className='nosql-item'>
        <p>{props.name}</p><p>
          {
            PageData[props.language]
              .section[13]
          }: {props.confidence}
        </p>
    </div>
  )
}

export default CompetenceNoSqlDatabase;