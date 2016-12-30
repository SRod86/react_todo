import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/actions';

let AddRestaurant = ({ dispatch }) => {
  let rName, rStreet1, rStreet2, rCity, rState, rZip;

  return (
    <div>
      <input ref={nameField => {
                   rName = nameField;
                 }} />
      <input ref={street1Field => {
                   rStreet1 = street1Field;
                 }} />
      <input ref={street2Field => {
                   rStreet2 = street2Field;
                 }} />
      <input ref={cityField => {
                   rCity = cityField;
                 }} />
      <input ref={stateField => {
                   rState = stateField;
                 }} />
      <input ref={zipField => {
                   rZip = zipField;
                 }} />
      <button
        type="submit"
        onClick={
          () => {
            dispatch(addRestaurant(
                      rName.value,
                      rStreet1.value,
                      rStreet2.value,
                      rCity.value,
                      rState.value,
                      rZip.value
                    )
            );
            // Reset each input value
            clearInputs(rName, rStreet1, rStreet2, rCity, rState, rZip);
          }
        } >
        Add Restaurant
      </button>
    </div>
  );
}

function clearInputs(nameInput, street1Input, street2Input, cityInput, stateInput, zipInput) {
  nameInput.value = '';
  street1Input.value = '';
  street2Input.value = '';
  cityInput.value = '';
  stateInput.value = '';
  zipInput.value = '';
}

AddRestaurant = connect()(AddRestaurant)

export default AddRestaurant
