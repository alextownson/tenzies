import React from 'react'
import WindowTracker from './components/WindowTracker'

export default function App() {

    const [show, setShow] = React.useState(true)    

    function handleClick() {
        setShow(prevShow => !prevShow)
    }

    return(
        <div className='container'>
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}