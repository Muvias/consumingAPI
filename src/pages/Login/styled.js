import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  input {
    height: 35px;
    font-size: 16px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-bottom: 10px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
