import React, { useState } from 'react';
import {
  Nav,
  StyledLink,
  HamburgerMenu,
  CloseIconMenu,
  MobileNavLinks,
} from './navbar.style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>☰</HamburgerMenu>
      <MobileNavLinks isOpen={isOpen}>
        <CloseIconMenu onClick={() => setIsOpen(false)}>X</CloseIconMenu>
        <StyledLink to='/' onClick={() => setIsOpen(false)}>
          Home
        </StyledLink>
        <StyledLink to='/proverbs' onClick={() => setIsOpen(false)}>
          Proverbs
        </StyledLink>
        <StyledLink to='/about' onClick={() => setIsOpen(false)}>
          About
        </StyledLink>
      </MobileNavLinks>
    </Nav>
  );
};

export default Navbar;
