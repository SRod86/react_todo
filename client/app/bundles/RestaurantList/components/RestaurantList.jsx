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
    street1: PropTypes.string.isRequired,
    street2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired),
  onRestaurantClick: PropTypes.func.isRequired
}

export default RestaurantList;
