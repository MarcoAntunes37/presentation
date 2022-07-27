import React, {useState} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
function NavBar() {
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
                <a href='#perfil'>Perfil</a>
              </li>
              <li>                
                <a href='#graduation'>Graduação</a>
              </li>
              <li>
                <a href='#language'>Idiomas</a>                
              </li>
              <li>
                <a href='#soft'>Habilidades</a>
              </li>              
              <li>
                <a href='#project'>Projetos</a> 
              </li>
              <li>
                <a href='#contact'>Contato</a>  
              </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;