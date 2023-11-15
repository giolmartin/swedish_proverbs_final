import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
  margin: 20px auto;
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
  align-items: center;
  padding: 0;
  margin: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const CardFront = styled(CardFace)`
  background: #fff;
  color: #000;
  font-size: 1.2em;
`;

export const CardBack = styled(CardFace)`
  background: #f0f0f0;
  color: #000;
  font-size: 1em;
  transform: rotateY(180deg);
`;
