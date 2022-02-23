import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { titleContainer } = this.props;
    return (
      <section>
        <h1>{ titleContainer }</h1>
      </section>
    );
  }
}

Title.propTypes = {
  titleContainer: PropTypes.string.isRequired,
};

export default Title;
