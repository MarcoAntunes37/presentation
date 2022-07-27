import React from 'react';
import './language.css'

function CompetencesLanguage(props) {
  return (
    <div className='language-item'>
        <p>{props.language}</p>
        <p>Leitura: {props.read}</p>
        <p>Escuta: {props.listen}</p>
        <p>Escrita: {props.writing}</p>
        <p>Fala: {props.speak}</p>
    </div>
  )
}

export default CompetencesLanguage;