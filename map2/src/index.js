import './styles/main.css'
import ReactDOM from 'react-dom/client'

function App() {
    
    const thingsArray = ['Thing 1', 'Thing 2']
    const thingsElements = thingsArray.map(item => <p key={item}>{item}</p>)

    function addItem() {
        thingsArray.push('Thing ' + (thingsArray.length + 1))
        console.log(thingsArray)
    }

    return(
        <>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)