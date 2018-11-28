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
  

    
    // = (props) => (
    //   // console.log(props)
    //   <Switch>
    //     <Route exact path='/' render={(...props) => (
    //       <Pirates {...props} />
    //     )} />
    //     <Route path='/pirates/:number' component={PirateDetail} />
    //   </Switch> 
    // )
    
    // class Pirate extends Component {
    
    //   render() {
    
    //     const { details } = this.props;
    //     return (
    //       <div className='pirate'>
    //       <ul>
    //       <li><Link to={`pirates/${details._id}`}>{details.name}</Link></li>
    //       <li>{details.weapon}</li>
    //       <li>{details.vessel}</li>
    //       <li><button onClick={() => this.props.removePirate(this.props.index)}>✖︎</button></li>
    //       </ul>
    //       </div>
    //       )
    //     }
    //   }
    export default Pirate;