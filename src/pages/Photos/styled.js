import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  input{
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 180px;

    margin: 30px auto;

    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;

    background: #eee;

    overflow: hidden;

    cursor: pointer;

    img {
      width: 180px;
      height: 180px;
    }
  }
`;
