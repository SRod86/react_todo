import { restaurants, visibilityFilter }  from './restaurantList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  visibilityFilter,
  restaurants
});

export default rootReducer;
