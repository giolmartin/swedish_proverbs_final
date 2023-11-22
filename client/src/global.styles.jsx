import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: color.background;
  }
`;

export const AccentText = styled.p`
  font-family: 'Merriweather', sans-serif;
`;

export const Message = styled.h1`
  font-size: 2.5em;
  margin: 20px 0;
  font-family: 'Lato', sans-serif;
  text-align: center;
`;

export const ErrorMessage = styled(Message)`
  color: #ff6b6b;
`;

export const LoadingMessage = styled(Message)`
  color: #4a6fa5;
`;

export const color = {
  primary: '#4a6fa5',
  secondary: '#ffdb58',
  background: '#eaeaea',
  accent: '#ffffff',
  text: '#36454f',
  hover: '#3678af',
};

export const Color_ClassicSwedish = {
  primary: '#005cbf',
  secondary: '#fecb00',
  third: '##f2f2f2',
  fourth: '#ffffff',
  fifth: '#003f87',
};

export const Color_PastelNordic = {
  primary: '#7ba2cc',
  secondary: '#fddc5c',
  third: '#d4d4d4',
  fourth: '#ffffff',
  fifth: '#2b3a67',
};

export const Color_NordicNature = {
  primary: '#87ceeb',
  secondary: '#ffd700',
  third: '#2e8b57',
  fourth: '#708090',
  fifth: '#f5f5f5',
};

export const Color_UrbanSwedish = {
  primary: '#4169e1',
  secondary: '#ffd700',
  third: '#95a5a6',
  fourth: '#2c3e50',
  fifth: '#ecf0f1',
};
