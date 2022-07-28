import React from 'react';
import ProfileContacts from '../ProfileContacts'
import ContactData from '../../data/Contact';
import PageData from '../../data/Page';
import './footer.css'

function ProfileFooter(props) {
  return (
      <>
        <div className='logo-container'>
          <p>Marco Aurelio Antunes Junior</p>
          <p>
            {
              PageData[props.language]
                .section[11]
            }
          </p>
        </div>
        <div className='contacts-container'>
          {
            ContactData[0]
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
      </>    
  )
}

export default ProfileFooter
;