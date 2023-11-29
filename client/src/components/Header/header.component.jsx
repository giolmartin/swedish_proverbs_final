import React, { useState } from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  StyledLink,
  HamburgerMenu,
  CloseIconMenu,
  MobileNavLinks,
} from './header.style';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
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
      <HeaderTitle>Svenska Sayings</HeaderTitle>
      <div width={'24px'}></div>
    </HeaderContainer>
  );
};

export default Header;
