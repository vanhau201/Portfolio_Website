import React, { useState } from 'react'
import "./Projects.css"
import yolo from "../../assets/yolo.png"
import cnn from "../../assets/cnn.png"
import nlp from "../../assets/nlp.png"
import loto from "../../assets/loto.png"
const Projects = () => {
    const [projects] = useState([
        {
            "name": "License Plate Recoginition",
            "image": yolo,
            "description": "Motorcycle parking management website using deep learning model.",
            "source": "https://github.com/vanhau201/License_Plate_Recognition",

        },
        {
            "name": "Vehicle Classification",
            "image": cnn,
            "description": "Vehicle classification website in Vietnam.",
            "source": "https://github.com/vanhau201/Vehicle_Classification"
        },
        {
            "name": "Add Vietnamese Accents",
            "image": nlp,
            "description": "Website Add accents for Vietnamese without accents.",
            "source": "https://github.com/vanhau201/Add_Vietnamese_Accents"
        },
        {
            "name": "Call bingo",
            "image": loto,
            "description": "Website to call bingo in Vietnam.",
            "source": "https://github.com/vanhau201/Web_Call_Bingo",
            "demo": "https://lotovietnam.netlify.app/"
        }
    ])
    return (
        <div className='projects' id='projects'>
            <div className="container">
                <div className="projects__header">
                    <h2>My Projects</h2>
                </div>


                <div className="projects__content">
                    {
                        projects.map((project, index) => (
                            <div key={index} className='projects__content-details'>
                                <img src={project.image} alt="" />
                                <div>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                    <p>Source code: <a href={project.source} target="_blank" rel="noopener noreferrer"> {project.source}</a></p>
                                    {
                                        project.demo && <p>Web demo: <a href={project.demo} target="_blank" rel="noopener noreferrer"> {project.demo}</a></p>
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}


export default Projects