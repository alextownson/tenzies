import TrollFace from '../assets/TrollFace.png'

export default function Header() {
    return(
        <header>
            <img className="header-image" src={TrollFace} />
            <h1 className="header-title">Meme Generator</h1>
            <h2 className="header-subtitle">React Course - Project 3</h2>
        </header>
    )
}