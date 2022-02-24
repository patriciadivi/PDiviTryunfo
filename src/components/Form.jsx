import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section>
        <div>
          <Title titleContainer="Card de Cartas" />
        </div>
        <form>

          <label htmlFor="nameTest">
            Nome:
            <input
              id="nameTest"
              name="nameTest"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descricao">
            Descrição:
            <textarea
              name="descricao"
              id=""
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              cols="30"
              rows="10"
            />
          </label>

          <label htmlFor="Atributo1">
            Atributo 1:
            <input
              id="Atributo1"
              name="Atributo1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="Atributo2">
            Atributo 2:
            <input
              id="Atributo 2"
              name="Atributo2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="Atributo3">
            Atributo 3:
            <input
              id="Atributo3"
              name="Atributo3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="img">
            Imagem:
            <input
              id="img"
              name="img"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="selecao">
            Raridade:
            <select
              name="selecao"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="check">
            <input
              id="check"
              name="check"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Tryunfo
          </label>
        </form>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
