import styled from 'styled-components';
import { color } from '../../global.styles';
export const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #36454f;
`;

export const StyledParagraph = styled.p`
  color: ${color.text};
  line-height: 1.6;
  margin-bottom: 20px; // Add space between paragraphs
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
`;
