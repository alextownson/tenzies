import React from 'react'
import Count from './components/Count'

export default function App() {

    const [count, setCount] = React.useState(0)

    function subtract() {
        setCount(prevCount => prevCount -1)
    }

    function add() {
        setCount(prevCount => prevCount +1)
    }

    return(
        <div className='counter'>
            <button onClick={subtract} className='counter--minus'>-</button>
            <Count number={count}/>
            <button onClick={add} className='counter--plus'>+</button>
        </div>
    )
}