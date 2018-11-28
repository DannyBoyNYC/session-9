import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Pirates from './Pirates'
import Gallery from './Gallery'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/pirates' component={Pirates}/>
      <Route path='/gallery' component={Gallery}/>
    </Switch>
  </main>
)

export default Main