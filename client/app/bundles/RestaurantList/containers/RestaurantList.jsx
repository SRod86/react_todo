import React, { Component, PropTypes } from 'react';
import Restaurant from '../components/Restaurant'

export default class RestaurantList extends Component {
  render () {
    return (
      <ul>
        {this.props.restaurants.map(restaurant =>
          <Restaurant {...restaurant} />
                      //key={index} />
        )}
      </ul>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    street1: PropTypes.string.isRequired,
    street2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired)
}
