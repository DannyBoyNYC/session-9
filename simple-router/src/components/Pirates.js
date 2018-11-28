import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllPirates from './AllPirates'
import Pirate from './Pirate'

// The Pirates component matches one of two different routes depending on the full pathname

const Pirates = () => (
  <Switch>
    <Route exact path='/pirates' component={AllPirates}/>
    <Route path='/pirates/:number' component={Pirate}/>
  </Switch> 
)

export default Pirates
