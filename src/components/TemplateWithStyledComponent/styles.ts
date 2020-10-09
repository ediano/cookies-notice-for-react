import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, .9);
  width: 100%;
  bottom: 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  z-index: 998;

  p, button {
    text-align: center;
    padding: 25px;
    color: #fff;
    font-size: 18px;
  }

  button {
    background: #1e88e5;
    cursor: pointer;
    align-self: normal;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;