import styled from 'styled-components';
import { color } from '../../global.styles';

export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
  margin: 40px auto;
  border-radius: 10px;
`;

export const CardInside = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px; //Same as CardContainer
  padding: 20px;
  margin: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
`;

export const CardFront = styled(CardFace)`
  background: ${color.accent};
  color: ${color.text};
  font-size: 1.2em;
`;

export const CardBack = styled(CardFace)`
  background: ${color.primary};
  color: ${color.accent};
  font-size: 1em;
  transform: rotateY(180deg);
`;
