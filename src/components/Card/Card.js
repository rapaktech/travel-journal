import './Card.css';

export default function Card (props) {
    return (
        <div className="card">
            <div className='card--image-container'>
                <img src={props.imageUrl} alt={props.title} className='card--image' />
            </div>
            <div className='card--content'>
                <img src='' alt='Location Icon' className='card--content-location-icon' />
                <span className='card--content-location'>{props.location}</span>
                <span className='card--content-url'><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1 className='card--content-title'>{props.title}</h1>
                <p className='card--content-date'>
                    <span className='card--content-start-date'>{props.startDate}</span> - <span className='card--content-end-date'>{props.endDate}</span>
                </p>
                <p className='card--content-description'>{props.description}</p>
            </div>
        </div>
    )
}
