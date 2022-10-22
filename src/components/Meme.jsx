import React from 'react';
import memesData from "../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return(
        <main>
            <div className="form">
                <input className="form-input" placeholder="Top text" type="text" />
                <input className="form-input" placeholder="Bottom text" type="text" />
                <button className="form-btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img className="meme-img" src={memeImage}/>
        </main>
    )
}