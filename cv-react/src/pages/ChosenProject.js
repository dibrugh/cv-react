import React from 'react'
import { useParams } from 'react-router-dom'

import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import {projects} from '../helpers/projectsList'

import img from "../img/projects/02-big.jpg"


export default function ChosenProject() {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>Skills: React, Node.js, MongoDB</p>
                        </div>
                        {/* Если ссылка на gh есть, рендерим кнопку */}
                        {project.gitHubLink && <BtnGitHub link={'https://github.com'}/>}
                </div>
            </div>
        </main>
    )
}
