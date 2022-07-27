import React from 'react';
import './competence.css';
import { 
    faGraduationCap
 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompetenceFormation from '../CompetenceFormation';
import CompetenceApproach from '../CompetenceApproach';
import CompetenceFramework from '../CompetenceFramework';
import CompetenceNoSqlDatabase from '../CompetenceNoSqlDatabase';
import CompetencePrograming from '../CompetencePrograming';
import CompetencesLanguage from '../CompetencesLanguage';
import CompetenceSqlDatabase from '../CompetenceNoSqlDatabase';
import CompetencesSoft from '../CompetencesSoft';
import Data from '../../data/Competences.js'

function ProfileCompetences() {
    return (
        <div className='competence-container'>
            <div className='graduation-container' id='#graduation'>
            <h4>
                <FontAwesomeIcon 
                    icon={faGraduationCap}
                />
                {' '}
                Formação acadêmica: 
                </h4>      
                <div className='graduation-item-container'>
                {
                    Data[0]
                    .graduations
                    .map((item) => {
                        return <CompetenceFormation 
                        course={item.course}
                        grade={item.grade}
                        hours={item.hours}
                        instituition={item.instituition}
                        completed={item.completed}          
                        />
                    })
                }
                </div>
        </div>
            <div className='language-container' id='language'>
            <h4>Conhecimento linguístico:</h4>
                <div className='language-item-container'>
                {
                    Data[0].languages.map((item) => {
                        return (
                            <CompetencesLanguage                
                            language={
                                item.name
                            }
                            read={
                                item.read
                            }
                            listen={
                                item.listen
                            }
                            writing={
                                item.writing
                            }
                            speak={
                                item.speak
                            }
                            />
                        )
                    })
                }
                </div>
            </div>
            <div className='soft-container' id='soft'>
            <h4>Soft skills:</h4>
                <div className='soft-item-container'>
                    <CompetencesSoft 
                        soft={
                            Data[0]
                            .softskill
                        }            
                    />
                </div>                
            </div>
            <div className='programing-container' id='programing'>
                <h4>Linguagens de programação: </h4>
                <div className='programing-item-container'>
                {
                    Data[0].programming.map((item) =>{
                        return (
                            <CompetencePrograming 
                            icon={
                                item.icon
                            }
                            name={
                                item.name
                            }
                            confidence={
                                item.confidence
                            }
                            />
                        )
                    })
                }
                </div>
            </div>
            <div className='framework-container' id='framework'>
            <h4>Conhecimento em frameworks: </h4>
                <div className='framework-item-container'>
                {
                    Data[0].frameworks.map((item) =>{
                        return (
                            <CompetenceFramework
                            icon={
                                item.icon
                            }
                            name={
                                item.name
                            }
                            confidence={
                                item.confidence
                            } 
                            />
                        )
                    })
                }
                </div>
            </div>
            <div className='approach-container' id='approach'>
            <h4>Conhecimento em abordagens: </h4>
                <div className='approach-item-container'>
                {
                    Data[0].approachs.map((item) =>{
                        return (
                            <CompetenceApproach 
                            name={
                                item.name
                            }
                            confidence={
                            item.confidence
                            }
                            />
                        )
                    })
                }
                </div>
            </div>
            <div className='sql-container' id='sql'>
            <h4>Banco de dados SQL: </h4>
                <div className='sql-item-container'>
                {
                    Data[0].SQL.map((item) =>{
                        return (
                            <CompetenceSqlDatabase 
                            name={
                                item.name
                            }
                            confidence={
                                item.confidence
                            }
                            />
                        )
                    })
                }
                </div>
            </div>
            <div className='nosql-container' id='nosql'>
            <h4>Banco de dados NO-SQL: </h4>
                <div className='nosql-item-container'>
                {
                    Data[0].NOSQL.map((item) =>{
                        return (
                            <CompetenceNoSqlDatabase
                            name={
                                item.name
                            }
                            confidence={
                                item.confidence
                            }
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default ProfileCompetences;