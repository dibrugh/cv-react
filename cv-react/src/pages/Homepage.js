import React from 'react'
import Header from '../components/header/Header'

export default function Homepage() {
    return (
        <>
            <Header />

            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, StyledComponents</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>Not much to boast of</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}
