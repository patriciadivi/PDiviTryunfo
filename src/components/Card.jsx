import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import '../styles/SectionCard.css';

class Card extends React.Component {
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
    } = this.props;

    return (
      <section className="SectionCard">
        <Title titleContainer="Prévia do Card" />
        <section className="card">
          <h2 data-testid="name-card">{ cardName }</h2>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <h5 data-testid="description-card">{ cardDescription }</h5>
          <div>
            <p data-testid="attr1-card">
              {`Attr01................................................. ${cardAttr1}`}
            </p>
            <p data-testid="attr2-card">
              {`Attr02................................................. ${cardAttr2}`}
            </p>
            <p data-testid="attr3-card">
              {`Attr03................................................. ${cardAttr3}`}
            </p>
            <p data-testid="rare-card">{ cardRare }</p>
          </div>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
        </section>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
