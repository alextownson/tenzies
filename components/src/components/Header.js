import reactLogo from '../assets/React-icon.png'

export default function Header() {
    return(
        <header>
            <nav className='nav'>
                <img className='nav-logo' src={reactLogo} />
                <ul className='nav-items'>
                    <li className='link'>Pricing</li>
                    <li className='link'>About</li>
                    <li className='link'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}