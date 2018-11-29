import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    headline: 'Pirates!'
  }
  render() {
    return (
      <MyContext.Provider value='valuer'>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider