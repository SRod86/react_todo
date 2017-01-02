import React from 'react';
import FilterLink from '../containers/FilterLink';
import {
  SHOW_ALL,
  SHOW_VISITED,
  SHOW_PENDING
} from '../constants/restaurantListConstants';

const VisibilityLinks = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_VISITED}>
      Visited
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_PENDING}>
      Pending
    </FilterLink>
  </p>
);

export default VisibilityLinks;
