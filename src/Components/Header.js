import React from 'react';
import logo from '../media/logo.png';
import HeaderSC from './styled/HeaderSC';

const Header = () => {
  return (
    <HeaderSC>
      <img src={logo} alt="logo" />
    </HeaderSC>
  );
}

export default Header;