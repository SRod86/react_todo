import React, { Component, PropTypes } from 'react';

const Restaurant = ({visited, name, street1, street2, city, state, zip, onClick}) => {
  return (
    <li
      style={{textDecoration: visited ? 'line-through' : 'none'}}
      onClick={onClick} >
      {name}
      {street1}
      {street2}
      {city}
      {state}
      {zip}
    </li>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  visited: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Restaurant
