import styled from 'styled-components';
import { color } from '../../global.styles';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  background-color: ${color.background};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ProverbText = styled.p`
  font-size: 1.1em;
  color: ${color.text};
  font-family: 'Lato', sans-serif;
`;

export const TranslationText = styled.p`
  font-size: 0.9em;
  color: ${color.secondary_text};
  margin-top: 5px;
  font-family: 'Roboto', sans-serif;
`;
