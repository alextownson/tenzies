import './styles/main.css'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

function App() {
    
    const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2'])

    function addItem() {
        setThingsArray( (prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]) )
    }

    const thingsElements = thingsArray.map((item) => <p key={item}>{item}</p>)

    return(
        <>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)