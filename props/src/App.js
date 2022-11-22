import Jokes from "./components/Jokes"

export default function App() {
    return(
        <>
            <Jokes 
                setup="What do you call a factory that makes okay products?" 
                punchline="A satisfactory." 
            />
            <Jokes 
                setup="What did the janitor say when he jumped out of the closet?"
                punchline="Supplies!"   
            />
            <Jokes 
                setup="Have you heard about the chocolate record player?" 
                punchline="It sounds pretty sweet."     
            />
            <Jokes 
                setup="What did the ocean say to the beach?" 
                punchline="Nothing, it just waved."
            />
            <Jokes
                setup="Why do seagulls fly over the ocean?"
                punchline="Because if they flew over the bay, we'd call them bagels."
            />
        </>
    )
}