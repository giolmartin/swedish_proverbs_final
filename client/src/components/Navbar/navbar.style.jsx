import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../global.styles';

export const Nav = styled.nav`
  background: color.accent;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Lato', sans-serif;
  padding: 10px;
  margin: 0 10px;
  color: ${color.text};
  text-decoration: none;

  &:hover {
    color: ${color.primary};
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
    margin: 10px 0;
    width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseIconMenu = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5em;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  background: ${color.accent};
  height: 100vh;
  padding-top: 60px;
  z-index: 1;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
  }
`;
