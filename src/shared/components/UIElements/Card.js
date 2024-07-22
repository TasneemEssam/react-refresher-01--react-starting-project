import React from 'react';

import './Card.css';
//in react we have 2 components the presentational and the stateful 
// also have components that are smarter and manage state and orchestrate that their child components receive new data 

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;