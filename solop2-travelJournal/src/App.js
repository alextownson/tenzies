import data from './components/travelData'
import Trip from './components/Trip'
import Nav from './components/Nav'

export default function App() {

    const trips = data.map( item => {
        return(
            <Trip 
                key={item.id}
                {...item}
            />
        )
    })

    return(
        <>
            <Nav />
            {trips}
        </>
    )
}