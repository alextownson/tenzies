import star from '../assets/star-01.png'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image"></div>
            <div className="card-rating">
                <img className="card-star" src={star} />
                <p>{props.rating}<span className="grey"> {props.reviewCount} • {props.country}</span></p>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}