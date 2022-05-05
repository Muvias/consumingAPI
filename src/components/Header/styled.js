import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: ${primaryColor};

  a {
    font-weight: 700;
    margin: 0 10px 0 0;

    color: #fff;
  }
`;
