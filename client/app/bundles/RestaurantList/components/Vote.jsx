import React, { PropTypes } from 'react';

const Vote = ({ id, votes, onUpvoteClick, onDownvoteClick }) => {
  return (
    <div>
      <a
        style={{cursor: 'pointer'}}
        onClick={onUpvoteClick(id)} >
        ⬆️
      ️</a>
      <strong>{votes}&nbsp;</strong>
      <a
        style={{cursor: 'pointer'}}
        onClick={onDownvoteClick(id)} >
        ⬇️
      ️</a>
    </div>
  );
}

Vote.propTypes = {
  votes: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Vote
