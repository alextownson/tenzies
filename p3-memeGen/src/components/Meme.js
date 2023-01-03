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
    
    function handleChange(event) {

        const {name, value} = event.target

        setMemeData(prevMemeData => (
            {
                ...prevMemeData,
                [name]: value
            }
        ))
    }

    return (
        <main>
            <form>
                <input 
                    type="text" 
                    placeholder="Top text"
                    value={memeData.topText}
                    name="topText"
                    onChange={handleChange}    
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    value={memeData.bottomText}
                    name="bottomText"
                    onChange={handleChange}    
                />
                <button onClick={getMemeData} type="submit">Get a new meme image 🖼️</button>
            </form>
            <div className='meme--image'>
                <h1 id='memeTopText'>{memeData.topText}</h1>
                <p >{memeData.randomImg}</p>
                <h1 id='memeBottomText'>{memeData.bottomText}</h1>
            </div>
        </main>
    )
}