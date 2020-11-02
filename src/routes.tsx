import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import TopScreen from './pages/TopScreen'
import FloatingScreen from './pages/FloatingScreen'
import FloatingScreen2 from './pages/FloatingScreen2'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/top-screen" component={TopScreen} />
      <Route path="/floating-screen" component={FloatingScreen} />
      <Route path="/floating-screen-2" component={FloatingScreen2} />
    </Switch>
  </BrowserRouter>
)

export default Routes