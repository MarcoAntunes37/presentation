import React from 'react';
import './contact.css';
import { 
  faWhatsapp,
  faLinkedin, 
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone, 
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileContacts(props) {
  return (    
    <div className='contact-item'>
      <div className='item-whatsapp'>
        <p>
          <FontAwesomeIcon 
          icon={faWhatsapp} 
          />
          {' '}
          {props.whats}
        </p>
      </div>
      <div className='item-telephone'>
        <p>
          
          <FontAwesomeIcon 
            icon={faPhone} 
          />
          {' '}
          {props.telefone}          
        </p>
      </div>
      <div className='item-email'>
        <p>
          <FontAwesomeIcon 
            icon={faEnvelope} 
          />
          {' '}
          <a href={`mailto:${props.email}`}>Email</a>
        </p>
      </div>
      <div className='item-linkedin'>      
        <p>
          <FontAwesomeIcon 
            icon={faLinkedin} 
          />
          {' '}
          <a href={props.linkedin}>Linkedin</a>
        </p>
        
      </div>
      <div className='item-github'>
        <p>
          <FontAwesomeIcon 
            icon={faGithub} 
          />
          {' '}
          <a href={props.github}>Github</a>
        </p>
      </div>
  </div>
  )
}

export default ProfileContacts;