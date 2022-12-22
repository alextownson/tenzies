import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

export default function App() {

    const [user, setUser] = React.useState("Joe")

    return(
        <main>
            <Header user={user} />
            <Body user={user} />
        </main>
    )
}