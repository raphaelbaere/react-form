import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionState from './OptionState';
import countryStates from '../countryStates';

class SelectState extends Component {
  render() {
    const { state, handleValue } = this.props;
    const countryOptions = countryStates
      .map((countryState) => (
        <OptionState
          key={ countryState }
          countryState={ countryState }
        />));
    return (
      <label htmlFor="select_state">
        Estado
        <select
          name="state"
          id="select_state"
          value={ state }
          onChange={ handleValue }
        >
          {countryOptions}
        </select>
      </label>
    );
  }
}

SelectState.propTypes = {
  state: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default SelectState;
