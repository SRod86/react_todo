import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleVisitRestaurant } from '../actions/actions';
import RestaurantList from '../components/RestaurantList';
import { VisibilityFilters } from '../constants/restaurantListConstants'

const { SHOW_ALL, SHOW_VISITED, SHOW_PENDING } = VisibilityFilters;

const GetVisibleRestaurants = (restaurants, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return restaurants
    case SHOW_VISITED:
      return restaurants.filter(r => r.visited)
    case SHOW_PENDING:
      return restaurants.filter(r => !r.visited)
  }
}

GetVisibleRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    restaurants: GetVisibleRestaurants(state.restaurants, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRestaurantClick: (id) => {
      dispatch(toggleVisitRestaurant(id))
    }
  };
};

const VisibleRestaurantList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantList);

export default VisibleRestaurantList
