import React from 'react';
import PropTypes from 'prop-types';

class Inprut extends React.Component {
  render() {
    const { labelContainer, inprutType, inputValue, valueTest } = this.props;
    return (
      <label htmlFor={ labelContainer }>
        <input value={ inputValue } type={ inprutType } data-testid={ valueTest } />
      </label>
    );
  }
}

Inprut.propTypes = {
  inprutType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  labelContainer: PropTypes.string.isRequired,
  valueTest: PropTypes.string.isRequired,
};

export default Inprut;
