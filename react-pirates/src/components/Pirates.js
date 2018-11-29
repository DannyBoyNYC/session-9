import React from 'react';
import { Link } from 'react-router-dom';

const Pirates = (props) => (
  <div>
    <p>Pirates</p>
    <p><Link to={`/pirates/${props.details._id}`}>{props.details.name}</Link></p>
  </div>
)

export default Pirates;