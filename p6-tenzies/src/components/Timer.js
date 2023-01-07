import React from 'react'

export default function Timer(props) {
    
    const [time, setTime] = React.useState(0)
    const [lowestTime, setLowestTime] = React.useState(() => JSON.parse(localStorage.getItem('lowestTime')) || {
        data: false,
        score: 3600000
    })

    
    React.useEffect(()=> {
        let interval 
        if (!props.tenzies) {
            setTime(0)
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else if (props.tenzies) {
            clearInterval(interval)
            setLowestTime(prevTime => ({
                data: true,
                score: time < prevTime.score ? time : prevTime.score
                }
                )
            )
        }
        return () => clearInterval(interval)
    }, [props.tenzies])

    React.useEffect(() => {
        localStorage.setItem('lowestTime', JSON.stringify(lowestTime))
    }, [lowestTime])

    return (
        <>
            <p className='timer'>Current time: {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</p> 
            {lowestTime.data ? <p className='best-time'>Best time: {("0" + Math.floor((lowestTime.score / 60000) % 60)).slice(-2)}:{("0" + Math.floor((lowestTime.score / 1000) % 60)).slice(-2)}</p> : <p className='best-time'>Best time: N/A</p> }
        </>
    )
}