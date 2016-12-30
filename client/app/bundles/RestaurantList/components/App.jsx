import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'
import VisibleRestaurantList from '../containers/VisibleRestaurantList'
import AddRestaurant from '../containers/AddRestaurant'
import { VisibilityFilters } from '../constants/restaurantListConstants'

const { SHOW_ALL } = VisibilityFilters;

const App = () => (
  <div>
    <AddRestaurant />
    <VisibleRestaurantList />
  </div>
)

export default App
