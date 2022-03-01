import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      trunfoHas: false,
      isSaveButtonDisabled: true,
      data: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    console.log(this);
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validFrom);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      isSaveButtonDisabled: true,
    });
  }

  saveButtom = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      trunfoHas,
    } = this.state;
    const saveData = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      trunfoHas,
    };
    this.setState((dataNew) => ({
      data: [...dataNew.data, saveData],
      hasTrunfo: [...dataNew.data, saveData].some((card) => card.cardTrunfo),
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      trunfoHas: false,
    }));
  }

  validFrom = () => {
    const maxNumber = 210;
    const maxCard = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const validNull = [cardName, cardDescription, cardImage];
    const validNullText = validNull.every((cadAttr) => cadAttr !== '');

    const cadAttrs = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const validAttrs = cadAttrs.every((attr) => attr >= 0 && attr <= maxCard);

    const sumAttr = cadAttrs
      .reduce((acc, cardAttr) => acc + cardAttr, 0);
    const sumTotal = sumAttr <= maxNumber;

    const validTotalForm = validNullText && validAttrs && sumTotal;
    if (validTotalForm) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    const { state: {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } } = this;

    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.saveButtom }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            // cardTrunfo={ hasTrunfo }
          />
        </main>
      </>
    );
  }
}

export default App;
