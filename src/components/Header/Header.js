import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import auth from '../SignUp/firebaseInit';
import './Header.css';

const Header = () => {
    const [user]=useAuthState(auth);

//    signOut handler
      const handleSignOut= () =>{
        signOut(auth);
      }
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to ="/shipment">Shipment</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to ={'/login'}>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;