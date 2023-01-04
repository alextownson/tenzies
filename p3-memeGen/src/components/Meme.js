import React from 'react'
import memesData from "./memesData";

export default function Meme() {

    const [memeData, setMemeData] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })


    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])    

    function getMemeData(e) {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
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
            <div className='meme'>
                <img id='meme--image' src={memeData.randomImg} />
                <h1 id='memeTopText'>{memeData.topText}</h1>
                <h1 id='memeBottomText'>{memeData.bottomText}</h1>
            </div>
        </main>
    )
}