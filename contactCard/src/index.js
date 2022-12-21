import './main.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Star from './components/Star'

function App() {

    const [contact, setContact] = React.useState({
        firstName: "Alexander",
        lastName: "Levi",
        phone: "(647) 123-4567",
        email: "alexanderlevi@gmail.com",
        isFavourite: false
    })

    function toggleFavourite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavourite: !prevContact.isFavourite
            }
        })
    }

    return(
        <main>
            <article>
                <div className='card--image'></div>
                <Star isFilled={contact.isFavourite} handleClick={toggleFavourite} />
                <h2 className='card--name'>{contact.firstName} {contact.lastName}</h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--contact'>{contact.email}</p>
            </article>
        </main>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<App />)