import React from 'react'
import {nanoid} from 'nanoid'

export default function Dot (props) {

    let number 
    let dot
    
    switch (props.value) {
        case 1: 
        number = 'one'
        dot = <div className='dot' key={nanoid()}></div>
        break
        case 2:
        number = 'two'
        dot = [
        <div className='dot' key={nanoid()}></div>,
        <div className='dot' key={nanoid()}></div>
        ]
        break
        case 3: 
        number = 'three'
        dot = [
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>
        ]
        break
        case 4: 
        number = 'four'
        dot = [
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>
        ]
        break
        case 5: 
        number = 'five'
        dot = [
            <div id='five--top-left' className='dot' key={nanoid()}></div>,
            <div id='five--top-right' className='dot' key={nanoid()}></div>,
            <div id='five--centre' className='dot' key={nanoid()}></div>,
            <div id='five--bottom-left' className='dot' key={nanoid()}></div>,
            <div id='five--bottom-right'  className='dot' key={nanoid()}></div>
        ]
        break
        case 6: 
        number = 'six'
        dot = [
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>,
            <div className='dot' key={nanoid()}></div>
        ]
        break
    }

    return (
        <div className={`dots ${number}`}>{dot}</div>
    )
}