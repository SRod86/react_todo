import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/actions';

let iName, iStreet1, iStreet2, iCity, iState, iZip;

let createHandlers = dispatch => {
  let onClick = (node, data) => {
    dispatch(addRestaurant(
      iName.value,
      iStreet1.value,
      iStreet2.value,
      iCity.value,
      iState.value,
      iZip.value
    ))
  };

  return {
    onClick
  };
}

class AddRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);

  }

  allInputsEmpty(inputs) {
    return inputs.every(input => !input.value.trim());
  }

  handleSubmit(e) {
    e.preventDefault();

    var inputs = [iName, iStreet1, iStreet2, iCity, iState, iZip];
    if (this.allInputsEmpty(inputs)) {
      return
    }
    this.handlers.onClick;
    inputs.forEach(input => input.value = '');
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={nameField => {
                       iName = nameField
                     }}
                 value="a" />
          <input ref={street1Field => {
                       iStreet1 = street1Field
                     }}
                 value="a" />
          <input ref={street2Field => {
                       iStreet2 = street2Field
                     }}
                 value="a" />
          <input ref={cityField => {
                       iCity = cityField
                     }}
                 value="a" />
          <input ref={stateField => {
                       iState = stateField
                     }}
                 value="a" />
          <input ref={zipField => {
                       iZip = zipField
                     }}
                 value="a" />
          <button type="submit">
            Add Restaurant
          </button>
        </form>
      </div>
    );
  }
}

AddRestaurant = connect()(AddRestaurant)

export default AddRestaurant
