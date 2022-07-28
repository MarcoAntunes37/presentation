import React from 'react';
import './project.css'
import PageData from '../../data/Page';

function ProfileProjects(props) {
  return (
    <div className='project-item'>
        <p>
          {
            PageData[props.language]
              .section[10]
          }
        </p>
    </div>
  )
}

export default ProfileProjects;