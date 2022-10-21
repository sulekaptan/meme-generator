import React from "react"
import logo from "../assets/troll-face.png"

export default function Header() {
    return(
        <header className="header">
            <img className="header-img" src={logo} alt="" />
            <h1 className="header-title">Meme Generator</h1>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>  
    )
}