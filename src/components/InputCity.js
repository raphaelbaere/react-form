import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCity extends Component {
  render() {
    const { city, handleValue } = this.props;
    return (
      <label htmlFor="city_input">
        Cidade
        <input
          id="city_input"
          maxLength="28"
          name="city"
          onChange={ handleValue }
          type="text"
          value={ city }
        />
      </label>
    );
  }
}

InputCity.propTypes = {
  city: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default InputCity;
