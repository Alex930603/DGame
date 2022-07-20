import React from 'react';
import './App.css';

import arrowlefti from './arrowlefti.png';

class Gioco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie_scelte: [],
      frase_casuale: '',
      count: 0,
      giocatore_casuale: this.props.nomeGiocatori[0],
      array_casuale: this.props.nomeGiocatori,
      abilità: ['  ', 'giocoabilità2', 'giocoabilità3', 'giocoabilità4'],
      forza: ['giocoForza1', 'giocoForza2', 'giocoForza3', 'giocoForza4'],
      cultura: [],
      intelligenza: [
        {
          Domanda: ' Quando è stato scoperto il continente americano? ',
          Risposta: '1492',
        },
        {
          Domanda:
            " Come si chiama l'attore protagonista del film 'Il curioso caso di Benjamin Button'? ",
          Risposta: '1492',
        },
        {
          Domanda:
            " Come si chiamano i due mostri che Ulisse si trova a dover affrontare alle 'colonne d'ercole'? ",
          Risposta: '1492',
        },
        {
          Domanda: ' Il Pokèmon di tipo elettro più famoso ',
          Risposta: '1492',
        },
        { Domanda: " La terra del 'sol levante' ", Risposta: '1492' },
        { Domanda: ' I nomi delle 4 tartarughe ninja ', Risposta: '1492' },
        {
          Domanda:
            " A quale famoso filosofo viene attribuita la celebre frase 'Dio è morto'? ",
          Risposta: '1492',
        },
        {
          Domanda:
            " Termina questa frase: 'Quando un uomo con la pistola incontra un uomo con il fucile...' ",
          Risposta: '1492',
        },
        {
          Domanda: " 'So di non sapere' a chi viene attribuita questa frase? ",
          Risposta: '1492',
        },
        {
          Domanda: " La cattedrale che ospita il celebre 'gobbo' ",
          Risposta: '1492',
        },
        {
          Domanda: " Completa la frase: 'And she's buying a stairway to... ",
          Risposta: '1492',
        },
        {
          Domanda: " Il dio dell'inganno nella mitologia norrena ",
          Risposta: '1492',
        },
        {
          Domanda:
            " Quale è il significato della celebre frase 'cogito ergo sum'? ",
          Risposta: '1492',
        },
        {
          Domanda: " Il creatore della saga di 'Guerre stellari' ",
          Risposta: '1492',
        },
        {
          Domanda:
            ' Quale è il nome del celebre investigatore nato dalla penna di Arthur Conan Doyle? ',
          Risposta: '1492',
        },
        { Domanda: " Cosa significa l'aggettivo 'Aureo'?", Risposta: '1492' },
        {
          Domanda:
            ' Quanti sono i pianeti che fanno attualmente parte del nostro sistema solare? ',
          Risposta: '1492',
        },
        {
          Domanda:
            ' Come viene chiamata la temperatura più bassa che è possibile raggiungere? ',
          Risposta: '1492',
        },
        { Domanda: " Cosa è il 'Foie Grass?", Risposta: '1492' },
        {
          Domanda:
            " Come viene chiamata la condizione caratterizzata da una carenza di globuli rossi nell'organismo?",
          Risposta: '1492',
        },
        {
          Domanda: " L'opera più importante dell'architetto Antoni Gaudí",
          Risposta: '1492',
        },
        {
          Domanda:
            " In quale celebre saga viene detta la frase 'Tu non puoi passare?",
          Risposta: '1492',
        },
        {
          Domanda:
            ' I celebri fratelli inventori del proiettore cinematografico',
          Risposta: '1492',
        },
        {
          Domanda: " Completa il titolo del film:'Per un pugno di...",
          Risposta: '1492',
        },
        {
          Domanda:
            " L'attore che ha impersonato il personaggio di 'Jack Sparrow",
          Risposta: '1492',
        },
        {
          Domanda:
            " Quanti sono i libri che compongono la saga di 'Harry Potter'?",
          Risposta: '1492',
        },
        {
          Domanda: " In quale città è situato il 'Cristo redentor?",
          Risposta: '1492',
        },
      ],
    };
    this.mostraFrasi = this.mostraFrasi.bind(this);
  }

  async componentDidMount() {
    await this.mostraFrasi();
  }
  async mostraFrasi() {
    if (
      this.state.giocatore_casuale ===
      this.props.nomeGiocatori[this.props.nomeGiocatori.length - 1]
    ) {
      await this.setState({
        count: 0,
        array_casuale: this.props.nomeGiocatori,
      });
    }
    let nomeCasuale;
    nomeCasuale = this.state.array_casuale[this.state.count];
    await this.setState({ giocatore_casuale: nomeCasuale });
    let conta = this.state.count;
    conta++;
    await this.setState({ count: conta });

    let array = [
      this.state.abilità,
      this.state.forza,
      this.state.intelligenza,
      this.state.cultura,
    ];
    let arrayNuovo = [];
    for (let i = 0; i < this.props.categorie.length; i++) {
      if (this.props.categorie[i] === true) {
        arrayNuovo.push(array[i]);
      }
    }
    let frasiCategorie = [];
    for (let j = 0; j < arrayNuovo.length; j++) {
      for (let k = 0; k < arrayNuovo[j].length; k++) {
        frasiCategorie.push(arrayNuovo[j][k]);
      }
    }
    await this.setState({ categorie_scelte: frasiCategorie });
    let fraseCasuale =
      this.state.categorie_scelte[
        Math.floor(Math.random() * this.state.categorie_scelte.length)
      ];
    await this.setState({ frase_casuale: fraseCasuale });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'left' }}>
          <button
            style={{ border: 'none', backgroundColor: 'transparent' }}
            onClick={() => this.props.cambiaModalita(1)}
          >
            <img
              style={{ width: '40px', backgroundColor: 'transparent' }}
              src={arrowlefti}
              alt=""
            ></img>
          </button>
        </div>
        <div style={{ paddingTop: '20%', minHeight: '700px' }}>
          <p className="giocatore1">{this.state.giocatore_casuale} </p>

          <div className="animate__animated animate__fadeInRight div-frase-casuale">
            <p className="frase-casuale">{this.state.frase_casuale.Domanda}</p>
          </div>
          <p className="giocatore-casuale">
            {
              this.state.array_casuale[
                Math.floor(Math.random() * this.state.array_casuale.length)
              ]
            }{' '}
          </p>
          <button
            className="button-vai-avanti-frasi button-principale"
            onClick={this.mostraFrasi}
          >
            Avanti
          </button>
        </div>
      </div>
    );
  }
}

export default Gioco;
