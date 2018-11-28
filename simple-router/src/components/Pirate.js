import React from 'react'
import PiratesAPI from '../api'
import { Link } from 'react-router-dom'

// Pirate looks up the pirate using the number parsed from
// the URL's pathname. If no pirate is found with the given
// number, then a "pirate not found" message is displayed.
const Pirate = (props) => {
  console.log(props.match.params.number)
  const pirate = PiratesAPI.get(
    parseInt(props.match.params.number, 10)
  )
    if (!pirate) {
    return <div>Sorry, but the pirate was not found</div>
  }
  
  return (
    <div>
      <h1>{pirate.name} (#{pirate.number})</h1>
      <h2>Weapon: {pirate.weapon}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Pirate

// import React from 'react';

// const Pirate = () => (
//   <p>Pirate</p>
// )

// export default Pirate;