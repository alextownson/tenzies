import star from '../assets/star-01.png'

export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
          {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-image"></div>
            <div className="card-rating">
                <img className="card-star" src={star} />
                <p>{props.stats.rating}<span className="grey"> ({props.stats.reviewCount}) • {props.location}</span></p>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}