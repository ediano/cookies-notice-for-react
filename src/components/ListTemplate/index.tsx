import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const ListTemplate = () => (
  <Container>
    <p>
      Explore alguns de nossos templates.
    </p>

    <ul>
      <li><Link to="/">Default</Link></li>
      <li><Link to="/top-screen">Top Screen</Link></li>
      <li><Link to="/floating-screen">Floating Screen</Link></li>
    </ul>

    <p>
      Siga a <a href="https://github.com/ediano/cookies-notice-for-react" target="blank">documentação no GitHub</a>.
    </p>
  </Container>
)

export default ListTemplate