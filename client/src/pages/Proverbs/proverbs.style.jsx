import styled from 'styled-components';
import { color } from '../../global.styles';
export const ProverbsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SearchInput = styled.input`
  font-size: 1em;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  color: ${color.secondary_text};
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Lato', sans-serif;
`;
