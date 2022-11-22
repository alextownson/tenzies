import Jokes from "./components/Jokes"
import jokesData from "./components/jokesData"

export default function App() {
    
    const jokeElements = jokesData.map(joke => {
        return (
            <Jokes setup={joke.setup} punchline={joke.punchline} />
        )
    })

    return(

        <>
            {jokeElements}
        </>
    )
}