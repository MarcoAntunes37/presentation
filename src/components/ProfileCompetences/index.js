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
import CompetecenceData from '../../data/Competences.js'
import GraduationData from '../../data/Graduation';
import PageData from '../../data/Page';

function ProfileCompetences(props) {
    return (
        <div className='competence-container'>
            <div className='graduation-container' id='#graduation'>
            <h4>
                <FontAwesomeIcon 
                    icon={faGraduationCap}
                />
                {' '}
                {
                    PageData[props.language]
                        .section[1]
                }
                </h4>      
                <div className='graduation-item-container'>
                {
                    GraduationData[props.language]
                        .graduations
                        .map((item) => {
                            return <CompetenceFormation 
                            course={item.course}
                            grade={item.grade}
                            hours={item.hours}
                            instituition={item.instituition}
                            completed={item.completed}
                            language={props.language}    
                            />
                        })
                }
                </div>
        </div>
            <div className='language-container' id='language'>
                <h4>
                    {
                        PageData[props.language]
                            .section[2]
                    }
                </h4>
                <div className='language-item-container'>
                {
                    CompetecenceData[props.language]
                        .languages
                        .map((item) => {
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
                <h4>
                    {
                        PageData[props.language]
                            .section[3]
                    }
                </h4>
                <div className='soft-item-container'>
                    <CompetencesSoft 
                        soft={
                            CompetecenceData[props.language]
                                .softskill
                        }            
                    />
                </div>                
            </div>
            <div className='programing-container' id='programing'>
                <h4>
                    {
                        PageData[props.language]
                            .section[4]
                    }
                </h4>
                <div className='programing-item-container'>
                {
                    CompetecenceData[props.language]
                        .programming
                        .map((item) =>{
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
            <h4>
                {
                    PageData[props.language]
                        .section[5]
                }
            </h4>
                <div className='framework-item-container'>
                {
                    CompetecenceData[props.language]
                        .frameworks
                        .map((item) =>{
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
            <h4>
                {   
                    PageData[props.language]
                        .section[6]
                }
            </h4>
                <div className='approach-item-container'>
                {
                    CompetecenceData[props.language]
                        .approachs
                        .map((item) =>{
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
            <h4>
                {
                    PageData[props.language]
                        .section[7]
                }
            </h4>
                <div className='sql-item-container'>
                {
                    CompetecenceData[props.language]
                        .SQL
                        .map((item) =>{
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
            <h4>
                {
                    PageData[props.language]
                        .section[8]
                }
            </h4>
                <div className='nosql-item-container'>
                {
                    CompetecenceData[0]
                        .NOSQL
                        .map((item) =>{
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