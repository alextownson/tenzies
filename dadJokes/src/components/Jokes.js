import React from 'react'

export default function Jokes(props) {
    
    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevState => !prevState)
    } 

    return (
        <div className="joke">
            <p><strong>{props.setup}</strong></p>
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? 'Hide Punchline' : 'Show Punchline'}</button>
            <hr />
        </div>
    )
}