import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: ${colors.primaryDarkColor};
    background: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;

    font-weight: 700;

    color: #fff;
    background: ${colors.primaryColor};

    transition: all 200ms;

    &:hover {
      filter: brightness(90%);
    }
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0, 0, 10px, rgba(0, 0, 0, 0.1);
`;
