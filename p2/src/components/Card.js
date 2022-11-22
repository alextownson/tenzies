import star from '../assets/star-01.png'

export default function Card() {
    return (
        <div className="card">
            <div className="card-image"></div>
            <div className="card-rating">
                <img className="card-star" src={star} />
                <p>5.0<span className="grey"> (6) • USA</span></p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}