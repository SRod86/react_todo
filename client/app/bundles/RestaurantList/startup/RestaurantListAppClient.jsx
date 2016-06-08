import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/restaurantListStore';
import App from '../containers/App';

export default (props) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  return reactComponent;
}
