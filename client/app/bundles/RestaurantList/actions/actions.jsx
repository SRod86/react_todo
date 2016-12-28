import {
  ADD_RESTAURANT, VISIT_RESTAURANT,
  SET_VISIBILITY_FILTER
} from '../constants/restaurantListConstants';

export function addRestaurant(name, street1, street2, city, state, zip) {
  return { type: ADD_RESTAURANT, name, street1, street2, city, state, zip };
}

export function visitRestaurant(id) {
  return { type: VISIT_RESTAURANT, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
