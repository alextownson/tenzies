import headshot from '../assets/headshot.jpg'

export default function Info() {
    return(
        <>
            <img className='info-headshot' src={headshot} />
            <div className='info-text'>
                <h1 className='info-title'>Alex Townson</h1>
                <h4 className='info-subtitle'>Designer and Front End Developer</h4>
                <p className='info-link'><a target="_blank" href="https://alextownson.ca/">www.alextownson.ca</a></p>
                <div className="info-buttons">
                    <button>Email</button>
                    <button>LinkedIn</button>
                </div>
            </div>
        </>
    )
}