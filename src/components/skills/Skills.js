import React, { useState } from 'react'
import "./Skills.css"

const Skills = () => {
    const [languages] = useState([
        {
            "name": "HTML",
            "level": 90
        }, {
            "name": "CSS",
            "level": 80
        }, {
            "name": "JAVASCRIPT",
            "level": 75
        }, {
            "name": "PYTHON",
            "level": 85
        }
    ])
    return (
        <div className='skills' id="skills">
            <div className='container'>
                <div className='skills__header'>
                    <h2>My Skills</h2>
                </div>
                <div className='skills__content'>
                    <div className='skills__content-details'>
                        <h3>Languages</h3>
                        <div className='row'>
                            {
                                languages.map((lang, index) => (
                                    <div key={index} className='col-md-12 col-lg-6'>
                                        <div className='skills__content-progress'>
                                            <div className='progress__title'>
                                                <span>{lang.name}</span>
                                                <span>{lang.level}%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `${lang.level}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='skills__content-details'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-4' >
                                <div className='skills__content-details-border'>
                                    <h3>Frameworks</h3>
                                    <p>Reactjs</p>
                                    <p>Django Rest Framwork</p>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-4' >
                                <div className='skills__content-details-border'>
                                    <h3>Database</h3>
                                    <p>SQL Server</p>
                                    <p>Mongodb</p>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-4'>
                                <div className='skills__content-details-border'>
                                    <h3>Others</h3>
                                    <p>Amazon Web Services (AWS)</p>
                                    <p>Git (Git Shell, Github)</p>
                                    <p>English Reading Comprehension</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Skills