import React, { useState } from 'react'

export default function App() {

    const [isGoingOut, setIsGoingOut] = useState(true)

    function goingOutClick() {
        setIsGoingOut(prevState => !prevState)
    }

    return(
        <div className='state'>
            <h1 className='state--title'>Do I feel like going out tonight?</h1>
            <div onClick={goingOutClick} className='state--value'>
                <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
            </div>
        </div>
    )
}