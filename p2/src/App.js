import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/Data"

export default function App() {

    const cards = data.map(x => {
        return (
            <Card 
                key={x.id}
                {...x}
            />
        )
    })

    return (
        <>
            <Nav />
            <Hero />
            <section className='card-list'>
                {cards}
            </section>    
        </>
    )
}