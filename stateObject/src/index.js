import './main.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import starNoFill from './assets/star-01.png'
import starFill from './assets/star-02.png'

function App() {

    const [contact, setContact] = React.useState({
        firstName: "Alexander",
        lastName: "Levi",
        phone: "(647) 123-4567",
        email: "alexanderlevi@gmail.com",
        isFavourite: false
    })

    const starIcon = contact.isFavourite ? starFill : starNoFill

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
                <img onClick={toggleFavourite} className='card--star' src={starIcon} />
                <h2 className='card--name'>{contact.firstName} {contact.lastName}</h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--contact'>{contact.email}</p>
            </article>
        </main>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<App />)