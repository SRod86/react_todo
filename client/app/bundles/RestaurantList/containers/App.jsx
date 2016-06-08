import React, { Component } from 'react';
import RestaurantList from './RestaurantList'

export default class App extends Component {
  render() {
    return (
      <div>
        <RestaurantList restaurants={[]} />
      </div>
    );
  }
}
