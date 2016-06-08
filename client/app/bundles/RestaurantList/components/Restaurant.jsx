import React, { Component, PropTypes } from 'react';

export default class Restaurant extends Component {
  render () {
    return (
      <li
        style={{
          textDecoration: visited ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
      }}>
        {this.props.name}
        {this.props.street1}
        {this.props.street2}
        {this.props.city}
        {this.props.state}
        {this.props.zip}
      </li>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  visited: PropTypes.bool.isRequired
}
