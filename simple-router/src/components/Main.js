import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import AllPirates from './AllPirates'
import Gallery from './Gallery'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/allpirates' component={AllPirates}/>
      <Route path='/gallery' component={Gallery}/>
    </Switch>
  </main>
)

export default Main