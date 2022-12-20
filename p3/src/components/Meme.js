import React from 'react'
import memesData from "./memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState()

    function getMemeImage(e) {
        e.preventDefault();
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }
    
    return (
        <main>
            <form>
                <input type="text" placeholder="Top text"/>
                <input type="text" placeholder="Bottom text"/>
                <button onClick={getMemeImage} type="submit">Get a new meme image 🖼️</button>
            </form>
            <p className='meme--image'>{memeImage}</p>
        </main>
    )
}