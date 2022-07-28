import React from 'react';
import './sql.css'

function CompetenceSqlDatabase(props) {
  return (
    <div className='sql-item'>
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

export default CompetenceSqlDatabase;