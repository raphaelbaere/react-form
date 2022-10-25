import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCpf from './InputCpf';

export default class PersonalData extends Component {
  render() {
    const { name, email, cpf, handleValue } = this.props;
    return (
      <fieldset>
        <InputName
          name={ name }
          handleValue={ handleValue }
        />
        <InputEmail
          email={ email }
          handleValue={ handleValue }
        />
        <InputCpf
          cpf={ cpf }
          handleValue={ handleValue }
        />
      </fieldset>
    );
  }
}

PersonalData.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};
