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
        <div className='state'>
            <h1 className='state--title'>Do I feel like going out tonight?</h1>
            <div className='state--value'>
                <h1>{answer}</h1>
            </div>
        </div>
    )
}