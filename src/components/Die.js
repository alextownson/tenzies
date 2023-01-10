import React from 'react'
import Dot from './Dot'

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    return (
        <div onClick={props.hold} className='die' style={styles}>
            <Dot value={props.value} />
        </div>
    )
}
