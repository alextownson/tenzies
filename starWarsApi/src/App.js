import React from 'react'

export default function App() {

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    

    // Side effects

    React.useEffect(() => {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    function handleClick() {
        setCount(prevCount => prevCount + 1)
    }

    return(
        <>
            <div>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
            <h1>The count is {count}!</h1>
            <button onClick={handleClick}>Get next character</button>
        </>
    )
}