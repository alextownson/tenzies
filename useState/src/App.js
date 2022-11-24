import React from 'react'

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
            <div className='counter--count'>
                <h1>{count}</h1>
            </div>
            <button onClick={add} className='counter--plus'>+</button>
        </div>
    )
}