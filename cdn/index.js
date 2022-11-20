// import React from 'react'
// import ReactDOM from 'react-dom'

function Header() {
    return(
        <header>
            <nav className="nav">
                <img className="react-logo" src="React-icon.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Main() {
    return(
        <>
            <h1>Reasons I am excited to learn React:</h1>
            <ol>
                <li>Create single page applications</li>
                <li>Upgrade my skills</li>
                <li>Get a job</li>
            </ol>
        </>
    )
}

function Footer() {
    return(
        <footer className="footer">
            <small className="footer-text">© 2022 Townson development. All rights reserved</small>
        </footer>
    )
}

function Page() {
    return (
        <> 
            <Header />
            <Main />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Page />)