import reactLogo from '../assets/React-icon.png'

export default function Navbar() {
    return(
        <nav className='nav'>
            <img className='nav-logo' src={reactLogo} />
            <h3 className='nav-title'>ReactFacts</h3>
            <h4 className='nav-subtitle'>React Course - Project 1</h4>
        </nav>
    )
}