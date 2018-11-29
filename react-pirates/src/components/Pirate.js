import React from 'react';
import '../assets/css/Pirate.css';
import Pirates from './Pirates';
import PirateDetail from './PirateDetail';

import { Switch, Route } from 'react-router-dom'

class Pirate extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <Switch>
      <Route exact path='/' render={(props) => (
        <Pirates {...props} details={details}  />
        )} />
        <Route path='/pirates/:number' component={PirateDetail} />
        </Switch>
        )
      }
    }
    
    export default Pirate;