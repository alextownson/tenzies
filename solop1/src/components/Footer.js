import githubLogo from '../assets/GitHub-Mark-Light-120px-plus.png'
import instaLogo from '../assets/Instagram_Glyph_White.png'
import twitterLogo from '../assets/Twittersocialicons-roundedsquare-white.png'

export default function Footer() {
    return(
        <footer>
            <a target="_blank" href="https://github.com/alextownson"><img  src={githubLogo} /></a>
            <a target="_blank" href="https://www.instagram.com/softsound.wav/"><img src={instaLogo} /></a>
            <a target="_blank" href="https://twitter.com/softsoundwav"><img src={twitterLogo} /></a>
        </footer>
    )
}