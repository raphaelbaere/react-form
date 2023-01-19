import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OptionState extends Component {
  render() {
    const { countryState } = this.props;
    return (
      <option>{countryState}</option>
    );
  }
}

OptionState.propTypes = {
  countryState: PropTypes.string.isRequired,
};
