import './Card.css';
import locationIcon from '../../assets/icons/location-icon.png';

export default function Card (props) {
    return (
        <div className="card">
            <div className='card--image-container'>
                <img src={props.imageUrl} alt={props.title} className='card--image' />
            </div>
            <div className='card--content'>
                <img src={locationIcon} alt='Location Icon' className='card--content-location-icon' />
                <span className='card--content-location'>{props.location.toUpperCase()}</span>
                <span className='card--content-url'><a href={props.googleMapsUrl} target='_blank' rel="noreferrer">View on Google Maps</a></span>
                <h1 className='card--content-title'>{props.title}</h1>
                <p className='card--content-date'>{props.startDate} - {props.endDate}</p>
                <p className='card--content-description'>{props.description}</p>
            </div>
        </div>
    )
}
