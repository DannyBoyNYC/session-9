import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Pirates from './Pirates'
import Gallery from './Gallery'

const Header = () => (
  <header>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/pirates' component={Pirates}/>
      <Route path='/gallery' component={Gallery}/>
    </Switch>
  </header>
)

export default Header