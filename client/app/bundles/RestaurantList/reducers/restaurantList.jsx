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

function restaurant(state, action) {
  switch(action.type) {
    case ADD_RESTAURANT:
      return {
        name: action.name,
        street1: action.street1,
        street2: action.street2,
        city: action.city,
        state: action.state,
        zip: action.zip,
        visited: false
      }
    case VISIT_RESTAURANT:
      if(state.id != action.id) {
        return state;
      }

      return {
        ...state,
        visited: true
      };
  }
}

export function restaurants(state = [], action) {
  switch (action.type) {
    case ADD_RESTAURANT:
      return [...state, restaurant(undefined, action)];
    case VISIT_RESTAURANT:
      return state.map(r => restaurant(r, action));
    default:
      return state;
  }
}
