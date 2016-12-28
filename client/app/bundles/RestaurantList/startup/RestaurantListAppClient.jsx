import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import rootReducer from '../reducers/index'
import { dummyRestaurants } from './dummyData'

const store = createStore(rootReducer, dummyRestaurants);

export default class RestaurantListAppClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
