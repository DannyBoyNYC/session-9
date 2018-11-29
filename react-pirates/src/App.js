import React, { Component } from 'react';
import axios from 'axios';
import Pirates from './components/Pirates';
import PirateDetail from './components/PirateDetail';
import Header from './components/Header';
import PirateForm from './components/PirateForm';
import { Switch, Route } from 'react-router-dom';

// import MyProvider from './MyProvider';
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

class App extends Component {

  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this);
    this.removePirate = this.removePirate.bind(this);
    this.state = {
      pirates: {},
      isLoading: true,
      error: null
    }
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    axios.get('http://localhost:3005/api/pirates')
    .then(response => this.setState({
      pirates: response.data,
      isLoading: false
    }))
    .catch(error => this.setState({
      error,
      isLoading: false
    }));
  }
  
  render() {
    const { isLoading, error } = this.state;
  
    if (error) {
      return <p>{error.message}</p>;
    }
  
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
    return (
      <MyProvider>
      <div className="App">
        <Header headline='Pirates!' />
    
        <Switch>
          <Route exact path='/' render={(props) => (
          <Pirates {...props} details={this.state.pirates}  />
          )} />
    
          <Route path='/pirates/:number' render={(props) => (
            <PirateDetail {...props} details={this.state.pirates} />
          )} />
        </Switch>
    
        <PirateForm addPirate={this.addPirate} />
        </div>
        </MyProvider>
    );
  }

  removePirate(key){
    const pirates = {...this.state.pirates}
    console.log(key)
    console.log(this.state.pirates[key]._id)
    let pirateDel = this.state.pirates[key]._id;
    axios.get(`http://localhost:3005/api/pirates/${pirateDel}`)
    .then(delete pirates[key])
    .then(this.setState({pirates}))
  }

  addPirate(pirate) {
    console.log(pirate)
    const pirates = { ...this.state.pirates }
    axios.post('http://localhost:3005/api/pirates/', pirate)
    .then ( pirates[pirate] = pirate )
    .then(this.setState({ pirates: pirates }))
  }

}

export default App;
