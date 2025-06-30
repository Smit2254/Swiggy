import { useState } from 'react';
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const Header = () => {
  const [button, setButton] = useState('Login');

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='company logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              button === 'login' ? setButton('Logout') : setButton('login');
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
