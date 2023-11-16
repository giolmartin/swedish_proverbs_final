import React from 'react';

import { Nav, StyledLink } from './navbar.style';

const Navbar = () => (
  <Nav>
    <StyledLink to='/'>Home</StyledLink>
    <StyledLink to='/proverbs'>Proverbs</StyledLink>
    <StyledLink to='/about'>About</StyledLink>
  </Nav>
);

export default Navbar;
