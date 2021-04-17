import React from 'react';
import './Header.css';
import {FcShop} from 'react-icons/fc';

function Header() {
    return (
        <div className='header-container'>
            <div className='app-logo-container'>
                <div><FcShop className='app-logo'/></div>
                <div><strong className='logo-title'>TECH SHOP</strong></div>
            </div>
            <div className='user-container'>
                <div className='user-login'>
                    <span>Login</span>
                </div>
                <div className='user-sign'>
                    <span>Sign In</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
