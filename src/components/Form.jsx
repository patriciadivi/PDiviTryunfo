import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import '../styles/SectionForm.css';

class Form extends React.Component {
  onInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="SectionForm">
        <div>
          <Title titleContainer="Adicionar nova carta" />
        </div>
        <form>

          <label htmlFor="nameTest">
            Nome:
            <input
              id="nameTest"
              name="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descricao">
            Descrição:
            <textarea
              name="cardDescription"
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
              name="cardAttr1"
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
              name="cardAttr2"
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
              name="cardAttr3"
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
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare">
            Raridade:
            <select
              id="cardRare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option placeholder="Escolha uma opção" value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {
            hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="cardTrunfo1">
                  <input
                    id="cardTrunfo"
                    name="cardTrunfo"
                    className="checkbox"
                    type="checkbox"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trybe Tryunfo
                </label>
              )
          }

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
