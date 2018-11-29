import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends Component {
  render(){
    return (
      <React.Fragment>
      <h3>Pirate Form Component</h3>
        <AddPirateForm addPirate={this.props.addPirate} />
      </React.Fragment>
      )
  }
  
}

export default PirateForm;