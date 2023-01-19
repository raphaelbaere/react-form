import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputAdress from './InputAddress';
import InputCity from './InputCity';
import SelectState from './SelectState';

export default class AddressData extends Component {
  render() {
    const { address, city, state, handleValue } = this.props;
    return (
      <fieldset>
        <InputAdress
          address={ address }
          handleValue={ handleValue }
        />
        <InputCity
          city={ city }
          handleValue={ handleValue }
        />
        <SelectState
          state={ state }
          handleValue={ handleValue }
        />
      </fieldset>
    );
  }
}

AddressData.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};
