import React from 'react'

import "./style.css"
import { Link } from 'react-router-dom'

export default function Project({ title, img, id }) {
    return (
        <Link to={`/project/${id}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </li>
        </Link>
    )
}
