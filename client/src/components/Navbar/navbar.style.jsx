import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-family: 'Lato', sans-serif;
  padding: 10px;
  margin-right: 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
