import React from 'react';
import './language.css'
import PageData from '../../data/Page';

function CompetencesLanguage(props) {
  return (    
    <div className='language-item'>
      {console.log(props.language)}     
        <p>{props.name}</p>
        <p>
          {
            PageData[props.language]
              .section[14]
          }:{' '}{props.read}
        </p>
        <p>
          {
            PageData[props.language]
              .section[15]
          }:{' '}{props.listen}
        </p>
        <p>
          {
            PageData[props.language]
              .section[16]
          }:{' '}{props.speak}
        </p>
        <p>
          {
            PageData[props.language]
              .section[17]
          }:{' '}{props.writing}
        </p>
    </div>
  )
}

export default CompetencesLanguage;