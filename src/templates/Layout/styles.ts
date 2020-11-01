import styled from 'styled-components'

export const ListTemplate = styled.div`
width: 100%;
height: 64px;

.wrapper {
  max-width: 992px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper ul li {
  display: inline-block;
  padding: 10px
}

.wrapper ul li a {
  background: #444;
  border: 1px solid transform;
  padding: 10px;
  border-radius: 4px;
  color: #fafafa;
}

.wrapper ul li a:hover {
  color: #444;
  background: #fafafa;
  border: 1px solid #444;
}

button.menu {
  font-weight: bold;
  font-size: 18px;
  margin-right: 25px;
  background: transparent;
  cursor: pointer;
}

@media (min-width: 651px){
  button.menu {
    display: none;
  }
}

@media (max-width: 650px){
  .wrapper ul {
    transform: translateX(150%);
    position: fixed;
    width: 300px;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .9);
    height: 100%;
    z-index: 999;
    transition: transform 0.2s;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px 4px rgba(0,0,0,.9);

    li {
      margin: 10px 0;
    }
  }

  .wrapper ul.active {
    transform: translateX(0);
  }
}
`

export const Context = styled.div`
display: flex;
align-items: center;

button {
  font-weight: bold;
  font-size: 18px;
  margin-right: 25px;
  background: transparent;
  cursor: pointer;
}

button:hover,
svg:hover {
  color: #666;
  fill: #666;
}
`

export const Text = styled.span`
height: 32px;
display: flex;
align-items: center;
font-weight: bold;
margin-left: 30px;
`

export const Display = styled.div`
position: relative;
width: 100%;
height: calc(100% - 96px);
border: 20px solid;
border-radius: 10px;
`