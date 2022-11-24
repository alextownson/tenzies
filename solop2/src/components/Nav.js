import world from '../assets/world.png'

export default function Nav() {
    return(
        <nav>
            <h1>Alex's Travel Journal</h1>
            <img className="nav-world" src={world} />
        </nav>
    )
}