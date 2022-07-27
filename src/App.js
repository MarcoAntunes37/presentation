import React from 'react';
import './App.css'
import Image from './components/ProfileImage';
import Competences from './components/ProfileCompetences';
import Presentation from './components/ProfilePresentation';
import Projects from './components/ProfileProjects';
import ProfileData from './data/Profile.js'
import ProfileFooter from './components/ProfileFooter'
import NavBar from './components/NavBar';

function App() {
  return (
<div className='App-header'>
  <div className='App'>
    <div className='app-content'>
      <NavBar />
      <div className='profile-container' id='perfil'>
        <Image />
        <div className='presentation-container'>
        <h4>Sobre mim:</h4>
          <Presentation 
            presentation={
            ProfileData[0]
            .presentation
            }
          />
        </div>
      </div>
      <Competences />        
      <div className='project-container' id='project'>
      <h4>Projetos: </h4>
        <div className='project-item-container'>
          <Projects />
        </div>
      </div>
    </div>
    <div className='footer-container' id='contact'>
            <ProfileFooter />
        </div>
  </div>
</div>
  )
}

export default App;