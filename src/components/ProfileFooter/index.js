import React from 'react';
import ProfileContacts from '../ProfileContacts'
import ProfileData from '../../data/Profile'
import './footer.css'

function ProfileFooter() {
  return (
    <div className='footer-item-container'>
      <div className='footer-item'>
        <div className='logo-container'>
          <p>Marco Aurelio Antunes Junior</p>
          <p>Desenvolvedor e Analista de software</p>
        </div>
        <div className='contacts-container'>
          {
            ProfileData[0]
            .contatos
            .map((item) => {
              return <ProfileContacts
              whats={item.whats}
              telefone={item.telefone}
              email={item.email}
              linkedin={item.linkedin}
              github={item.github}
              />
            })
          }
        </div>
      </div>
    </div>
    
  )
}

export default ProfileFooter
;