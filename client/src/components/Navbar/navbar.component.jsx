import React, { useState } from 'react';
import {
  Nav,
  StyledLink,
  Hamburger,
  CloseIcon,
  MobileNavLinks,
} from './navbar.style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>
      <MobileNavLinks isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)}>X</CloseIcon>
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
