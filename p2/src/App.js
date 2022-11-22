import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Card
                rating="5.0" 
                reviewCount={`(${6})`} 
                country="USA" 
                title="Life Lessons with Katie Zaferes" 
                price={136} 
            />
        </>
    )
}