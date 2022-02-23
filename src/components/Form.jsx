import React from 'react';
import Title from './Title';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Title titleContainer="Card de Cartas" />
        </div>
        <form action="">
          Nome:
          <Input
            inputValue="name"
            inprutType="text"
            valueTest="name-input"
          />
          <label htmlFor="descricao">
            Descrição:
            <textarea
              name="descricao"
              id=""
              data-testid="description-input"
              cols="30"
              rows="10"
            />
          </label>
          Atributo 1:
          <Input
            inputValue=""
            inprutType="number"
            valueTest="attr1-input"
          />
          Atributo 2:
          <Input
            inputValue=""
            inprutType="number"
            valueTest="attr2-input"
          />
          Atributo 3:
          <Input
            inputValue=""
            inprutType="number"
            valueTest="attr3-input"
          />
          Imagem:
          <Input
            inputValue=""
            inprutType="text"
            valueTest="image-input"
          />
          <label htmlFor="selecao">
            Raridade:
            <select name="" id="" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <Input
            inputValue=""
            inprutType="checkbox"
            valueTest="trunfo-input"
          />
          Super Trybe Tryunfo
        </form>
        <button type="submit" data-testid="save-button"> Enviar </button>
      </section>
    );
  }
}

export default Form;
