import React from 'react';
import logo from '../Media/logo1.png'

function Header(props) {
    return (
        <header className="flex justify-center bg-black-t-50">
        <img className="logoImg" src={logo} alt="logo"/>
      </header>
    );
}

export default Header;