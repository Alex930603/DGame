import React from 'react';
import './App.css';
import './style.css';

import NomiGiocatori from './nomeGiocatori.js';

class NumeroGiocatori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_giocatori: 0,
      sceltaGiocatori: false,
    };
    this.cambiaNumeroGiocatori = this.cambiaNumeroGiocatori.bind(this);
    this.vaiAvanti = this.vaiAvanti.bind(this);
  }

  cambiaNumeroGiocatori(e) {
    this.setState({ numero_giocatori: e.target.value });
  }

  vaiAvanti() {
    if (
      !isNaN(this.state.numero_giocatori) &&
      this.state.numero_giocatori >= 2
    ) {
      this.setState({ sceltaGiocatori: true });
    }
  }
  render() {
    return (
      <div style={{}}>
        {!this.state.sceltaGiocatori && (
          <div
            className="center-div-prima-pagina"
            style={{ marginLeft: '30px', marginRight: '30px' }}
          >
            <div
              style={{ marginTop: '40px' }}
              className="animate__animated animate__fadeInRight div-container-titolo"
            >
              <h1 className="titolo-principale-app">
                Scegli il numero di giocatori
              </h1>
            </div>
            <div className="div-container-input-numero-giocatori">
              {' '}
              <input onChange={this.cambiaNumeroGiocatori}></input>
            </div>
            <button className="button-principale" onClick={this.vaiAvanti}>
              Avanti
            </button>
          </div>
        )}
        {this.state.sceltaGiocatori && (
          <NomiGiocatori numeroGiocatori={this.state.numero_giocatori} z />
        )}
      </div>
    );
  }
}

export default NumeroGiocatori;
