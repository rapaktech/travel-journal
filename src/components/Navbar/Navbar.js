import './Navbar.css';
import earthIcon from '../../assets/icons/earth-icon.png';

export default function Navbar () {
    return (
        <nav className='nav'>
            <img src={earthIcon} alt="Jim's Travel Journal Logo" className='nav--logo'/>
            <h4 className='nav--text'>Jim's Travel Journal</h4>
        </nav>
    )
}
