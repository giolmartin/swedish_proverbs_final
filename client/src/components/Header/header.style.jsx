import styled from 'styled-components';
import { AccentText } from '../../global.styles';

export const HeaderContainer = styled.header`
  background: #f8f9fa;
  padding: 10px 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled(AccentText)`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;