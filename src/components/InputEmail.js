import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputEmail extends Component {
  render() {
    const { email, handleValue } = this.props;
    return (
      <label htmlFor="email_input">
        Email
        <input
          id="email_input"
          maxLength="50"
          name="email"
          onChange={ handleValue }
          type="email"
          value={ email }
        />
      </label>
    );
  }
}

InputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default InputEmail;
