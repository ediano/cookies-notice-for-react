import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .9);
  max-width: 500px;
  width: 80%;
  max-height: 300px;
  height: 90%;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, .9);
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  
  z-index: 998;

  p {
    display: flex;
    align-items: center;
    height: 100%;
  }

  p, button {
    text-align: center;
    padding: 25px;
    color: #fff;
    font-size: 18px;
  }

  button {
    display: block;
    background: #1e88e5;
    cursor: pointer;
    align-self: normal;
  }

  @media (max-width: 500px){
    width: 90%;
    height: 90%;
  }
`;