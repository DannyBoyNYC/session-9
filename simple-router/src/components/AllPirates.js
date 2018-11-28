import React from 'react'
import PiratesAPI from '../api'
import { Link } from 'react-router-dom'

// The AllPirates iterates over all of the pirates and creates a link to their profile page.
const AllPirates = () => (
  <div>
  <ul>
    {
      PiratesAPI.all().map(p => (
        <li key={p.number}>
          <Link to={`/pirates/${p.number}`}>{p.name}</Link>
        </li>
      ))
    }
  </ul>
</div>
)

export default AllPirates