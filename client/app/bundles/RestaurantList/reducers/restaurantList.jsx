import {
  ADD_RESTAURANT, VISIT_RESTAURANT,
  SET_VISIBILITY_FILTER, VisibilityFilters
} from '../constants/restaurantListConstants'
const { SHOW_ALL } = VisibilityFilters;

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

export function restaurants(state = [], action) {
  switch (action.type) {
  case ADD_RESTAURANT:
    return [...state, {
      name: action.name,
      street1: action.street1,
      street2: action.street2,
      city: action.city,
      state: action.state,
      zip: action.zip,
      visited: false
    }];
  case VISIT_RESTAURANT:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        visited: true
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}
