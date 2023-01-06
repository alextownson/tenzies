import React from 'react'
import Die from './components/Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])


    function allNewDice () {
        const newDice = []
        for (let i=0; i<10; i++) {
            newDice.push({
                value: Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid()
            })
        }
        return(
            newDice
        )
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => 
                    {
                        return die.isHeld ? {...die} : {...die, value: Math.ceil(Math.random()*6)}
                    
                    }
                )
            )
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => 
                {
                    return die.id === id ? {...die, isHeld: !die.isHeld} : die
                }
            )
        )
    }


    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='die-container'>
            {dice.map((die) => <Die hold={() => hold(die.id)} key={die.id} value={die.value} isHeld={die.isHeld}/>)}
            </div>
            <button className='roll-dice' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
        </main>
    )
}