import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      search, onInputSearchChange, onSearchButtonClick } = this.props;
    return (
      <section>
        <h2>Filtro de Busca</h2>
        <form>
          <label htmlFor="searchName">
            <input
              type="text"
              id="searchName"
              name="search"
              value={ search }
              onChange={ onInputSearchChange }
              data-testid="name-filter"
            />
          </label>
          <button type="submit" onClick={ onSearchButtonClick }>Buscar</button>
        </form>
      </section>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
}.isRequired;

export default Search;
