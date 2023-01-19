import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAdress extends Component {
  render() {
    const { address, handleValue } = this.props;
    return (
      <label htmlFor="address_input">
        Endereço
        <input
          id="adress_input"
          maxLength="200"
          name="address"
          onChange={ handleValue }
          type="text"
          value={ address }
        />
      </label>
    );
  }
}

InputAdress.propTypes = {
  address: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default InputAdress;
