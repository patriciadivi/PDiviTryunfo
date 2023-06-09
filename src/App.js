import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Search from './components/Search';

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
      previewSearch: '',
      search: '',
      searchRare: 'todas',
      searchTryunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
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
  }

  deleteCard = ({ target }) => {
    const { hasTrunfo, data } = this.state;
    const cardFind = data.find((eleName) => target.id === eleName.cardName);
    console.log(cardFind);
    const checkShow = cardFind.cardTrunfo;
    console.log(checkShow);
    this.setState({
      hasTrunfo: checkShow ? false : hasTrunfo,
      data: data.filter((eleName) => eleName.cardName !== cardFind.cardName),
    });
  }

  onInputSearchChange = ({ target: { type, name, value, checked } }) => {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  }

  onSearchButtonClick = (event) => {
    event.preventDefault();
    // const { previewSearch } = this.state;
    // this.setState({
    //   search: previewSearch,
    // });
  }

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
      data,
      previewSearch,
      search,
      searchRare,
      searchTryunfo,
    } } = this;

    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Search
            previewSearch={ previewSearch }
            search={ search }
            onInputSearchChange={ this.onInputSearchChange }
            onSearchButtonClick={ this.onSearchButtonClick }
          />
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
            titulo="Prévia do Card"
            // cardName={ cardName }
            // cardDescription={ cardDescription }
            // cardAttr1={ cardAttr1 }
            // cardAttr2={ cardAttr2 }
            // cardAttr3={ cardAttr3 }
            // cardImage={ cardImage }
            // cardRare={ cardRare }
            // cardTrunfo={ cardTrunfo }
            { ...this.state }
          />
          { data.filter(
            (card) => (card.cardName.toLowerCase().includes(search.toLowerCase())),
          ).filter((card) => (searchRare === 'todas'
            ? card.cardRare.includes('')
            : card.cardRare === searchRare))
            .filter((card) => (searchTryunfo
              ? card.cardTrunfo
              : true))
            .map((eleCard) => (
              <section className="SectionCard" key={ eleCard.cardName }>
                <Card
                  titulo=" Card Carta"
                  cardName={ eleCard.cardName }
                  cardDescription={ eleCard.cardDescription }
                  cardAttr1={ eleCard.cardAttr1 }
                  cardAttr2={ eleCard.cardAttr2 }
                  cardAttr3={ eleCard.cardAttr3 }
                  cardImage={ eleCard.cardImage }
                  cardRare={ eleCard.cardRare }
                  cardTrunfo={ eleCard.cardTrunfo }
                />
                <button
                  id={ eleCard.cardName }
                  type="button"
                  onClick={ this.deleteCard }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </section>
            ))}
        </main>
      </>
    );
  }
}

export default App;
