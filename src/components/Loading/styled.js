import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;

  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  font-size: 30px;
  color: #fff;

  z-index: 1;

  div {
    position: absolute;
    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.8);

    z-index: 1;
  }

  span {
    z-index: 2;
  }
`;
