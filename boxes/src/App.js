import React from 'react'
import boxes from './boxes'
import Box from './components/Box'

export default function App(props) {

    const [box, setBox] = React.useState(boxes)

    function toggle(id) {
        // setBox(prevState => {
        //     const newBoxes = []
        //     for (let i = 0; i < prevState.length; i++) {
        //         const currentBox = prevState[i]
        //         if (currentBox.id === id) {
        //             const updatedBox = {
        //                 ...currentBox,
        //                 on: !currentBox.on
        //             }
        //             newBoxes.push(updatedBox)
        //         } else {
        //             newBoxes.push(currentBox)
        //         }
        //     }
        //     return newBoxes
        // })
        setBox(prevState => {
            return prevState.map((item) => {
               return item.id === id ? {...item, on: !item.on} : item
            })
        })
  
    }

    const boxElements = box.map(item => 
        <Box 
        handleClick={() => toggle(item.id)}
        on={item.on} 
        key={item.id} />)

    return (
        <main>
            {boxElements}
        </main>
    )
}