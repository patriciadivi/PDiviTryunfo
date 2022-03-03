import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      search, onInputSearchChange, onSearchButtonClick,
      searchRare, searchTryunfo } = this.props;
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

          <label htmlFor="searchRare">
            <select
              id="searchRare"
              name="searchRare"
              value={ searchRare }
              onChange={ onInputSearchChange }
              data-testid="rare-filter"
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="searchTryunfo">
            <input
              type="checkbox"
              id="searchName"
              name="searchTryunfo"
              value={ searchTryunfo }
              onChange={ onInputSearchChange }
              data-testid="trunfo-filter"
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
