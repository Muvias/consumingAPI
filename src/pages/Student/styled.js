import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;

    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0 20px;
  margin-top: 20px;

  position: relative;

  img {
    width: 180px;
    height: 180px;

    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    background: ${colors.primaryColor};

    border: none;
    border-radius: 50%;

    width: 36px;
    height: 36px;
    bottom: 0;

    position: absolute;
  }
`;
