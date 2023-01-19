import React, { Component } from 'react';
import PersonalData from './PersonalData';
import AddressData from './AddressData';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
  };

  handleValidations = (name, value) => {
    switch (name) {
    case 'name':
      this.setState({
        [name]: value.toUpperCase(),
      });
      break;
    case 'address':
      this.setState({
        [name]: value.replaceAll('[^A-Z]+', ''),
      });
      break;
    default:
      break;
    }
  };

  handleValue = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleValidations(name, value);
    });
  };

  render() {
    const { name, email, cpf, address, city, state } = this.state;
    return (
      <form>
        <PersonalData
          name={ name }
          email={ email }
          cpf={ cpf }
          handleValue={ this.handleValue }
        />
        <AddressData
          address={ address }
          city={ city }
          state={ state }
          handleValue={ this.handleValue }
        />
      </form>
    );
  }
}
