import React, { Component } from 'react';
import '../assets/css/Pirate.css';

import { Link } from 'react-router-dom'

class Pirate extends Component {
  
  render(){
    const { details } = this.props.details;
    return (
      <div className='pirate'>
      <ul>

        {
          this.props.details.map( p => (
            <li key={p._id}>
              <Link to={`pirates/${p._id}`}>{p.name}</Link>
            </li>
          ))
        }
      {/* <li>{details.name}</li>
      <li>{details.weapon}</li>
      <li>{details.vessel}</li> */}
      <li><button onClick={() => this.props.removePirate(this.props.index)}>✖︎</button></li>
      {/* <li><button onClick={() => this.props.removePirate(this.props.key)}>✖︎</button></li> */}
        </ul>
      </div>
      )
    }
  }
  export default Pirate;

  // {
  //   Object.keys(this.state.pirates)
  //   .map(key =>
  //     <Pirate key={key}
  //       index={key}
  //       details={this.state.pirates[key]}
  //       removePirate={this.removePirate} />)
  // }