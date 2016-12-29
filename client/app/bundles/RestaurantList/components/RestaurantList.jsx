import React, { Component, PropTypes } from 'react';
import Restaurant from '../components/Restaurant'

const RestaurantList = ({restaurants, onRestaurantClick}) => {
  return (
    <ul>
      {restaurants.map(restaurant =>
        <Restaurant key={restaurant.id}
                    {...restaurant}
                    onClick={() => onRestaurantClick(restaurant.id)}/>
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
  })),
  onRestaurantClick: PropTypes.func.isRequired
}

export default RestaurantList;
