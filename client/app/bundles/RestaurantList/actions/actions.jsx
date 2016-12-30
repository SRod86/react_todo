import {
  ADD_RESTAURANT, TOGGLE_VISIT_RESTAURANT,
  SET_VISIBILITY_FILTER
} from '../constants/restaurantListConstants';
import { nextRestId } from '../startup/dummyData'

let nextRestaurantId = 5;
export function addRestaurant(name, street1, street2, city, state, zip) {
  return {
    type: ADD_RESTAURANT,
    id: nextRestaurantId ++,
    name,
    street1,
    street2,
    city,
    state,
    zip
  };
}

export function toggleVisitRestaurant(id) {
  return { type: TOGGLE_VISIT_RESTAURANT, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
