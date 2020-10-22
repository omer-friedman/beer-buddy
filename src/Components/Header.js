import React from 'react';
import logo from '../Media/logo1.png'
import HeaderSC from './Styled/HeaderSC'

function Header(props) {
    return (
        <HeaderSC>
          <img className="logoImg" src={logo} alt="logo"/>
        </HeaderSC>
    );
}

export default Header;