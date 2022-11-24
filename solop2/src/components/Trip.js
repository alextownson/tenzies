export default function Trip(props) {
    
return(
        <section className="trip-container">
            <div className="trip-image-container">
                <img className="trip-image" src={props.img} />
            </div>
            <div className="trip-info-container">
                <div className="trip-map-container">
                    <img className="trip-pin" src={props.pin} />
                    <p className="trip-place">{props.place.toUpperCase()}</p>
                    <p><a target="_blank" href={props.map}>View on Google Maps</a></p>
                </div>
                <h1 className="trip-title">{props.title}</h1>
                <p><strong>{props.dates}</strong></p>
                <p className="trip-description">{props.description}</p>
            </div>
        </section>
    )
}