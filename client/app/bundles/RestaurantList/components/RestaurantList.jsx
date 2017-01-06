import React, { Component, PropTypes } from 'react';
import Restaurant from '../components/Restaurant'

const RestaurantList = ({ restaurants, onRestaurantClick, onUpvoteClick, onDownvoteClick }) => {
  return (
    <ul>
      {restaurants.map(restaurant =>
        <Restaurant key={restaurant.id}
                    {...restaurant}
                    onRestaurantClick={() => onRestaurantClick(restaurant.id)}
                    onUpvoteClick={() => onUpvoteClick(restaurant.id)}
                    onDownvoteClick={() => onDownvoteClick(restaurant.id)} />
      )}
    </ul>
  );
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    street1: PropTypes.string,
    street2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    visited: PropTypes.bool.isRequired,
    votes: PropTypes.number.isRequired
  })),
  onRestaurantClick: PropTypes.func.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired,
}

export default RestaurantList;
