import React, {useState} from 'react';
import './App.css'
import Image from './components/ProfileImage';
import Competences from './components/ProfileCompetences';
import Presentation from './components/ProfilePresentation';
import Projects from './components/ProfileProjects';
import PageData from './data/Page';
import ProfileData from './data/Profile'
import ProfileFooter from './components/ProfileFooter'
import NavBar from './components/NavBar';
import BrFlag from './images/br.png'
import UsFlag from './images/eua.png'
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const [language, setLanguage] = useState(0)
  const [flag, setFlag]= useState(BrFlag)

  function switchLanguage(){
    if(language === 0){
      setLanguage(1)
      setFlag(UsFlag)
    }
    else if (language === 1){
      setLanguage(0)
      setFlag(BrFlag)
    }
  }
  return (
    <div className='App-header'>
      <div className='App'>
        <div className='app-content'>
          <NavBar
            language={language}
            flag={flag}
            function={switchLanguage}
          />          
          <div className='profile-container' id='perfil'>
            <Image />
            <div className='presentation-container'>
              <h4>
                  {
                    PageData[language]
                      .section[0]
                  }
              </h4>
              <Presentation 
                presentation={
                  ProfileData[language]
                    .presentation
                }
              />
            </div>
          </div>
          <Competences 
            language={language}
          />        
          <div className='project-container' id='project'>
          <h4>
              {
                PageData[language]
                  .section[9]
              }
          </h4>
            <div className='project-item-container'>
              <Projects 
                language={language}
              />
            </div>
          </div>
        </div>
        <div className='footer-container' id='contact'>
          <ProfileFooter 
            language={language}
          />
        </div>
      </div>
    </div>
  )
}

export default App;