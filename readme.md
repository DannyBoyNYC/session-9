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

Install axios in your project with `npm install axios -S` and use it instead of the native fetch API in your project. 

Refactor using axios instead of the fetch API:

```js
import axios from 'axios';

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

Here is some starter code. It is up to you to debug and get the pirate successfully showing in the front end.

`App.js`:

```js
addPirate(pirate) {
  console.log(pirate)
  const pirates = {...this.state.pirates}
  axios.post('http://localhost:3005/api/pirate/', {pirate})
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

## Notes

```js
if (module.hot) {
  module.hot.accept();
}
```

Classes in JS: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
