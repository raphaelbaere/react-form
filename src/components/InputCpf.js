import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCpf extends Component {
  render() {
    const { cpf, handleValue } = this.props;
    return (
      <label htmlFor="cpf_input">
        CPF
        <input
          id="cpf_input"
          maxLength="11"
          name="cpf"
          onChange={ handleValue }
          type="text"
          value={ cpf }
        />
      </label>
    );
  }
}

InputCpf.propTypes = {
  cpf: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default InputCpf;
