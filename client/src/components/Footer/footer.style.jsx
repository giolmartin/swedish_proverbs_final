import styled from 'styled-components';
import { AccentText } from '../../global.styles';

export const FooterContainer = styled.footer`
  background: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export const FooterText = styled(AccentText)`
  font-family: 'Merriweather', sans-serif;
  font-size: 1rem;
  color: #333;
  margin: 0;
`;
