import {
  ADD_RESTAURANT, TOGGLE_VISIT_RESTAURANT,
  SET_VISIBILITY_FILTER, VisibilityFilters,
  UPVOTE, DOWNVOTE
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
        id: action.id,
        name: action.name,
        street1: action.street1,
        street2: action.street2,
        city: action.city,
        state: action.state,
        zip: action.zip,
        visited: false
      }
    case TOGGLE_VISIT_RESTAURANT:
      if(state.id != action.id) {
        return state;
      }

      return {
        ...state,
        visited: !state.visited
      };
    case UPVOTE:
      if(state.id != action.id) {
        return state;
      }

      return {
        ...state,
        votes: state.votes += 1
      };
    case DOWNVOTE:
      if(state.id != action.id) {
        return state;
      }

      return {
        ...state,
        votes: state.votes -= 1
      };
    default:
      return state;
  }
}

export function restaurants(state = [], action) {
  switch (action.type) {
    case ADD_RESTAURANT:
      return [...state, restaurant(undefined, action)];
    case TOGGLE_VISIT_RESTAURANT:
    case UPVOTE:
    case DOWNVOTE:
      return state.map(r => restaurant(r, action));
    default:
      return state;
  }
}
