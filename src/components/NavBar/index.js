import React, {useState} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageData from '../../data/Page';
import LanguageSwitcher from '../LanguageSwitcher';
import './navbar.css'


function NavBar(props) {
  const [display, setDisplay] = useState('flex')
  function handleClick () {
    if(display === 'flex'){
      setDisplay('none')
    }
    else{
      setDisplay('flex')
    }
    
  }

  return (
    <div className='navbar-container'>
        <div className='navbar-hamburguer'>
          <a className='hamburguer' href='javascript:void(0)' onClick={handleClick}>
            <FontAwesomeIcon icon={faBars}/>
          </a>
        </div>      
        <div className='navbar-item' style={{display: display}}>
            <ul>
              <li>
                <a href='#perfil'>
                  {
                    PageData[props.language]
                      .nav[0]
                  }
                </a>
              </li>
              <li>                
                <a href='#graduation'>
                  {
                    PageData[props.language]
                      .nav[1]
                  }
                </a>
              </li>
              <li>
                <a href='#language'>
                  {
                    PageData[props.language]
                      .nav[2]
                  }
                </a>                
              </li>
              <li>
                <a href='#soft'>
                  {
                    PageData[props.language]
                      .nav[3]
                  }
                </a>
              </li>              
              <li>
                <a href='#project'>
                  {
                    PageData[props.language]
                      .nav[4]
                  }  
                </a> 
              </li>
              <li>
                <a href='#contact'>
                  {
                    PageData[props.language]
                      .nav[5]
                  }
                </a>
              </li>
                <LanguageSwitcher 
                  language={props.language}
                  flag={props.flag}
                  function={props.function}
                  
                />
            </ul>
            
        </div>
    </div>
  )
}

export default NavBar;