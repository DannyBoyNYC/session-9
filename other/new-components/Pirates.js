import React from 'react';
import { Link } from 'react-router-dom';

const Pirates = (props) => (
  <div>
    <p><Link to={`/pirates/${props.details._id}`}></Link>{props.details.name}</p>
  </div>
)

export default Pirates;