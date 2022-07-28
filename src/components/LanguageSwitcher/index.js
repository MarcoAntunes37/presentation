import React from 'react';
import './language.css'

function LanguageSwitcher(props) {
  return (
    <li style={{float: 'right'}}>
      <a href='#' onClick={props.function}>
        <img class='language-switcher' src={props.flag}/>
      </a>
    </li>
  )
}

export default LanguageSwitcher;