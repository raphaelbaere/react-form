import React, { Component } from 'react';
import PersonalData from './PersonalData';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
  };

  handleValidations = (name, value) => {
    switch (name) {
    case 'name':
      this.setState({
        [name]: value.toUpperCase(),
      });
      break;
    default:
      break;
    }
  };

  handleValue = () => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleValidations(name, value);
    });
  };

  render() {
    const { name, email, cpf } = this.state;
    return (
      <form>
        <PersonalData
          name={ name }
          email={ email }
          cpf={ cpf }
          handleValue={ this.handleValue }
        />
      </form>
    );
  }
}
