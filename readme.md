# IX - React

## Homework

Review the notes below, step through them again using them and the finished version as a guide. Finish the form that sends a pirate to the back end, updates the database and displays the new pirate in the front end.

<!-- For your final project you will create a version of the recipes list and details pages in React.

Of course, if you wish you can do something entirely original. Just propose it. -->

## Reading

* [Rendering elements](https://reactjs.org/docs/rendering-elements.html) in React
* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) in React
* [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) in React

## Review

## Persisting the Data

## Loading

The loading state should be used to indicated that an asynchronous request is happening. Set an `isLoading` property in the constructor:

```js
  this.state = {
    pirates: {},
    isLoading: true
  }
}
```

Turn it off once the data is loaded:

```js
componentDidMount(){
  this.setState({ isLoading: true });
  fetch('http://localhost:3005/api/pirates')
  .then(response => response.json())
  .then(pirates => this.setState({pirates, isLoading: false}))
}
```

In your render() method you can use React’s conditional rendering to display either a loading indicator or the resolved data.

```js
render() {

  const { isLoading } = this.state;

  if (isLoading) {
    return <p>Loading ...</p>;
  }
```

Test the loading by going to Chrome dev tools > Network > Online and set it to Slow 3G. 

As an exercise you could try implementing a [React Content Loader](https://github.com/danilowoz/react-content-loader).

## Error Handling

The second state that you could keep in your local state would be an error state. Create a new entry in state:

```js
  this.state = {
    pirates: {},
    isLoading: false,
    error: null
  }
}
```

Add error handling to the initialization and a new render method to support it:

```js
componentDidMount(){
  this.setState({ isLoading: true });
  fetch('http://localhost:3005/api/pirates')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong ...');
    }
  })
  .then(pirates => this.setState({pirates, isLoading: false}))
  .catch(error => this.setState({ error, isLoading: false }));
}

  render() {
  
    if (this.error) {
      return <p>{this.error.message}</p>;
    }
  
    if (this.isLoading) {
      return <p>Loading ...</p>;
    }
```

Use destructuring:

```js
render() {
  const { isLoading, error } = this.state;

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
```

Try to induce an error by changing the connection string to the back end.

## Axios

You can substitute the native fetch API with another library. A commonly used library for fetching data is axios. 

`cd` into `react-pirates` and install axios in your project with `npm install axios -S`.

Refactor using axios instead of the fetch API:

```js
import axios from 'axios';
...
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
```

## Removing Pirates

Currently our `removePirate` function removes pirates from state but has no effect on the database.

Let's use axios and a get query to delete a pirate.

```js
removePirate(key){
  const pirates = {...this.state.pirates}
  console.log(key)
  console.log(this.state.pirates[key]._id)
  let pirateDel = this.state.pirates[key]._id;
  axios.get(`http://localhost:3005/api/pirates/${pirateDel}`)
  .then(delete pirates[key])
  .then(this.setState({pirates}))
}
```

Create a corresponding end point in express for deleting a pirate.

```js
app.get('/api/pirates/:id', function(req, res){
  let id = req.params.id;
  Pirate.deleteOne({ _id: id}, result => {
    return res.sendStatus(200)
  })
})
```

## Adding Pirates

`App.js`:

```js
  addPirate(pirate) {
    console.log(pirate)
    const pirates = {...this.state.pirates}
    axios.post('http://localhost:3005/api/pirates/', pirate )
    .then(response => response.data)
    .then(this.setState({ pirates: pirates }))
  }
```

Express:

```js
app.post('/api/pirates', function(req, res){
  Pirate.create( req.body, (err, pirate) => {
    if (err) return console.log(err);
    return res.send(pirate)
  })
})
```

This will work:

```js
addPirate(pirate) {
  const pirates = { ...this.state.pirates }
  axios.post('http://localhost:3005/api/pirates/', pirate)
  pirates[pirate] = pirate
  this.setState({ pirates: pirates })
}
```

Use the promise to add the new pirate to pirates and then update state:

```js
addPirate(pirate) {
  const pirates = { ...this.state.pirates }
  axios.post('http://localhost:3005/api/pirates/', pirate)
  .then ( pirates[pirate] = pirate )
  .then(this.setState({ pirates: pirates }))
}
```

## Routing

Create a new project in today's directory.

`npx create-react-app simple-router`

`cd` into it and start it.

Clean up the default config.

`npm install --save react-router-dom`

`index.js`:

```js
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```

`App`:

```js
import React from 'react'
import Header from './Header'
import Main from './Main'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App
```

`Main`:

```js
import React from 'react';

const Main = () => (
  <p>Main</p>
)

export default Main;
```

`Header`:

```js
import React from 'react';

const Header = () => (
  <p>Header</p>
)

export default Header;
```

Edit `Main`:

```js
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
```

Pirates:

```js
import React from 'react';

const Pirates = () => (
  <p>Pirates</p>
)

export default Pirates;
```

Home:

```js
import React from 'react';

const Home = () => (
  <p>Home</p>
)

export default Home;
```

Gallery:

```js
import React from 'react';

const Gallery = () => (
  <p>Gallery</p>
)

export default Gallery;
```

Edit Header:

```js
import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header

```

### Nested Routes

Pirates:

```js
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)


export default Roster

```


## Notes
