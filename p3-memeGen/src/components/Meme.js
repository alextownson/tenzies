import React from 'react'
import memesData from "./memesData";

export default function Meme() {

    const [memeData, setMemeData] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeData(e) {
        e.preventDefault();
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeData((prevData) => {
            return {
                ...prevData, 
                randomImg: url
            }
        })
    }
    
    return (
        <main>
            <form>
                <input type="text" placeholder="Top text"/>
                <input type="text" placeholder="Bottom text"/>
                <button onClick={getMemeData} type="submit">Get a new meme image 🖼️</button>
            </form>
            <p className='meme--image'>{memeData.randomImg}</p>
        </main>
    )
}