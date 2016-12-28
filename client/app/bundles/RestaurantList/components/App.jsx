import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'
import VisibleRestaurantList from '../containers/VisibleRestaurantList'
import { VisibilityFilters } from '../constants/restaurantListConstants'

const { SHOW_ALL } = VisibilityFilters;

const App = () => (
  <div>
    <VisibleRestaurantList />
  </div>
)

export default App
