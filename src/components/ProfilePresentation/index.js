import React from 'react';
import './presentation.css'

function ProfilePresentation(props) {
  return (
    <div className='presentation-item-container'>      
      <div className='presentation-item'>        
        <p className='text presentation'>
          {props.presentation}
        </p>
      </div>        
    </div>
  )
}

export default ProfilePresentation;