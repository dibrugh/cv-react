import React from 'react'

import gitHubIcon from "../../img/icons/gitHub-black.svg"
import "./style.css"

export default function BtnGitHub({link}) {
    return (
        <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitHub repo
        </a>
    )
}
