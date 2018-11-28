import React from 'react'

const PirateDetail = (props) => (
  <div className='pirate'>
  <ul>
    <li>{props.name}</li>
    <li>{props.weapon}</li>
    <li>{props.vessel}</li>
    {/* <li><button onClick={() => this.props.removePirate(this.props.index)}>✖︎</button></li> */}
  </ul>
  </div>
)

export default PirateDetail