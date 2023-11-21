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

  //TODO: Finish the hover effect
  &:hover {
    color: ${color.primary};
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 5px 0;
    text-align: center;
  }
`;
