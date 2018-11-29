import React from 'react'
import PiratesAPI from '../api'
import { Link } from 'react-router-dom'

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
      <Link to='/pirates'>Back</Link>
    </div>
  )
}

export default Pirate