import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 30px auto;

  text-align: center;

  ul {
    margin: 30px 0;
  }

  ul li {
    display: inline-block;
    margin-top: 10px;
    padding: 10px
  }

  ul li a {
    background: #999;
    padding: 10px;
    border-radius: 4px
  }

  ul li a {
    color: #333
  }

  ul li a:hover {
    color: #999;
    background: #333
  }

  p a {
    color: #444;
    font-weight: bold
  }
`