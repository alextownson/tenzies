import reactLogo from '../assets/React-icon.png'

export default function Main() {
    return(
        <main>
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="main-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className='main-logo' src={reactLogo} />
        </main>
    )
}