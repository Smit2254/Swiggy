import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [button, setButton] = useState('Login');

  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='flex justify-between bg-blue-100 shadow-lg'>
      <div className='logo-container'>
        <img className='w-56' src={LOGO_URL} alt='company logo' />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {OnlineStatus ? '✅' : '❌'}</li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <Link to='/cart'>
            <li className='px-4 font-bold text-xl'>Cart ({cartItems.length})</li>
          </Link>
          <button
            className='login-btn cursor-pointer'
            onClick={() => {
              button === 'Login' ? setButton('Logout') : setButton('Login');
            }}
          >
            {button}
          </button>
          <li className='px-4'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
