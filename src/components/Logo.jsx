import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={logo} loading='lazy' alt='Kalkuli Comforts' />
        </Link>
    );
};

export default Logo;