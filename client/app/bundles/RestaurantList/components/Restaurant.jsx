import React, { Component, PropTypes } from 'react';
import Vote from './Vote';

const Restaurant = ({ id, name, street1, street2, city, state, zip, visited, votes, onRestaurantClick, onUpvoteClick, onDownvoteClick }) => {
  return (
    <div>
      <li
        style={{
          textDecoration: visited ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={onRestaurantClick} >
        {name}
        {street1}
        {street2}
        {city}
        {state}
        {zip}
      </li>
      <Vote
        restaurrant_id={id}
        votes={votes}
        onUpvoteClick={() => onUpvoteClick}
        onDownvoteClick={() => onDownvoteClick} />
    </div>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  street1: PropTypes.string,
  street2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  visited: PropTypes.bool.isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Restaurant
