import './Navbar.css';
import logo from '../../assets/logo/logo.png';

export default function Navbar () {
    return (
        <nav className='nav'>
            <img src={logo} alt="Jim's Travel Journal Logo" className='nav--logo'/>
            <h4 className='nav--text'>Jim's Travel Journal</h4>
        </nav>
    )
}
