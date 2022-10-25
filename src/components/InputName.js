import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputName extends Component {
  render() {
    const { name, handleValue } = this.props;
    return (
      <label htmlFor="name_input">
        Nome
        <input
          id="name_input"
          maxLength="40"
          name="name"
          onChange={ handleValue }
          type="text"
          value={ name }
        />
      </label>
    );
  }
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default InputName;
