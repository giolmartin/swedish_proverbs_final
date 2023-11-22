import styled from 'styled-components';
import { color } from '../../global.styles';

export const Button = styled.button`
  background: ${color.primary};
  color: ${color.accent};
  border: none;
  padding: 10px 15px;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: ${color.hover};
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    outline: none;
  }
`;
