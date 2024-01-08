import React from 'react'
import { projects } from '../helpers/projectsList'
import Project from '../components/project/Project'


export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                
                {projects.map((el, index) => <Project id={index} key={index} title={el.title} img={el.img}/>)}

                </ul>
            </div>
        </main>
    )
}
