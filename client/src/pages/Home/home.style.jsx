import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh; // Adjust based on your header/footer height
  padding: 20px;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
