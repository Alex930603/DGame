import React from 'react';
import './App.css';
import Gioco from './gioco.js';
import { Row, Col, Container } from 'react-bootstrap';

class NomiGiocatori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomiGiocatori: [],
      vaiAvanti: 0,
      modalita_1: false,
      modalita_2: false,
      modalita_3: false,
      categorie: [false, false, false, false],
      vai_al_gioco: false,
      all_categories: [true, true, true, true],
      color_black: [true, true, true, true],
      border_grey: [true, true, true, true],
    };
    this.inserisciNome = this.inserisciNome.bind(this);
    this.checkAvanti = this.checkAvanti.bind(this);
    this.cambiaModalita = this.cambiaModalita.bind(this);
    this.cambiaGioco = this.cambiaGioco.bind(this);
    this.vaiAlGioco = this.vaiAlGioco.bind(this);
    this.changeColorBlack = this.changeColorBlack.bind(this);
  }
  inserisciNome(item, e) {
    let array = this.state.nomiGiocatori;
    array[item] = e.target.value;
    this.setState({ nomiGiocatori: array });
  }
  changeColorBlack(color) {
    let arrayTemporaneo = this.state.color_black;
    arrayTemporaneo[color] = !arrayTemporaneo[color];

    this.setState({
      color_black: arrayTemporaneo,
      border_grey: arrayTemporaneo,
    });
  }
  cambiaModalita(modalita) {
    this.setState({ vaiAvanti: 2, vai_al_gioco: false });
    if (modalita === 1) {
      this.setState({ modalita_1: true });
    } else if (modalita === 2) {
      this.setState({ modalita_2: true });
    } else if (modalita === 3) {
      this.setState({ modalita_3: true });
    }
  }

  cambiaGioco(gioco) {
    let array = this.state.categorie;
    if (gioco === 0) {
      array[0] = true;
    } else if (gioco === 1) {
      array[1] = true;
    } else if (gioco === 2) {
      array[2] = true;
    } else if (gioco === 3) {
      array[3] = true;
    }

    this.setState({ categorie: array });
  }
  checkAvanti() {
    let check = false;
    for (let i = 0; i < this.state.nomiGiocatori.length; i++) {
      if (this.state.nomiGiocatori[i] === '') {
        check = true;
        break;
      }
    }
    if (check === false) {
      this.setState({ vaiAvanti: 1 });
    }
  }
  componentDidMount() {
    let array = [];
    for (let i = 0; i < this.props.numeroGiocatori; i++) {
      array.push('');
    }
    this.setState({ nomiGiocatori: array });
  }

  vaiAlGioco() {
    console.log(this.state.categorie);
    this.setState({ vai_al_gioco: true, modalita_1: false });
  }
  render() {
    let bgColor1 = this.state.color_black[0] ? '3px 4px black ' : 'none';
    let bgColor2 = this.state.color_black[1] ? '3px 4px black ' : 'none';
    let bgColor3 = this.state.color_black[2] ? '3px 4px black ' : 'none';
    let bgColor4 = this.state.color_black[3] ? '3px 4px black ' : 'none';
    let border1 = this.state.border_grey[0]
      ? '3px solid transparent'
      : '3px solid black';
    let border2 = this.state.border_grey[1]
      ? '3px solid transparent'
      : '3px solid black';
    let border3 = this.state.border_grey[2]
      ? '3px solid transparent'
      : '3px solid black';
    let border4 = this.state.border_grey[3]
      ? '3px solid transparent'
      : '3px solid black';
    return (
      <div>
        {this.state.vaiAvanti === 0 && (
          <div
            style={{
              position: 'relative',
              height: '100%',
              marginLeft: '30px',
              marginRight: '30px',
            }}
          >
            <div style={{ position: 'absolute', margin: '0', top: '70%' }}>
              <div style={{ marginTop: '40px' }} class="div-container-titolo">
                <h1 class="titolo-principale-app">
                  Scegli il nome dei giocatori
                </h1>
              </div>
              <ul style={{ paddingLeft: '0' }}>
                {this.state.nomiGiocatori.map((item, i) => (
                  <div class="div-container-input-nomi-giocatori" key={i}>
                    <p class="span-input-nomi-giocatore">{i + 1}</p>
                    <input
                      class
                      key={i}
                      onChange={(e) => this.inserisciNome(i, e)}
                    ></input>
                  </div>
                ))}
              </ul>
              <button className="button-principale" onClick={this.checkAvanti}>
                Avanti
              </button>
            </div>
          </div>
        )}
        {this.state.vaiAvanti === 1 && (
          <div
            className="div-categorie"
            style={{
              position: 'relative',
              height: '100%',
              marginLeft: '30px',
              marginRight: '30px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                margin: '0',
                width: '100%',
                top: '50%',
              }}
            >
              <button
                className="bottoni-modalità"
                style={{ backgroundColor: '#FF6766', border: '#FF6766' }}
                onClick={(e) => this.cambiaModalita(1)}
              >
                Scegli Categorie
              </button>
              <br />
              <button
                className="bottoni-modalità"
                style={{ backgroundColor: '#FFD94E', border: '#FFD94E' }}
                onClick={(e) => this.cambiaModalita(2)}
              >
                Mix
              </button>
              <br />
            </div>
          </div>
        )}

        {this.state.modalita_1 && (
          <Container>
            <Row style={{ paddingTop: '20px' }}>
              <Col className="left-column" xs="6">
                <button
                  style={{
                    border: border1,
                    backgroundColor: '#46d82f',
                    boxShadow: bgColor1,
                  }}
                  className="bottoni-categorie"
                  onClick={(e) => {
                    this.cambiaGioco(0);
                    this.changeColorBlack(0);
                  }}
                >
                  Abilità
                </button>
              </Col>
              <Col className="right-column" xs="6">
                <button
                  style={{
                    border: border2,
                    backgroundColor: '#ed1722',
                    boxShadow: bgColor2,
                  }}
                  className="bottoni-categorie"
                  onClick={(e) => {
                    this.cambiaGioco(1);
                    this.changeColorBlack(1);
                  }}
                >
                  Forza
                </button>
              </Col>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Col className="left-column" xs="6">
                <button
                  style={{
                    border: border3,
                    backgroundColor: '#A26C21',
                    boxShadow: bgColor3,
                  }}
                  className="bottoni-categorie"
                  onClick={(e) => {
                    this.cambiaGioco(2);
                    this.changeColorBlack(2);
                  }}
                >
                  Cultura
                </button>
              </Col>
              <Col className="right-column" xs="6">
                <button
                  style={{
                    border: border4,
                    backgroundColor: '#110a6b',
                    boxShadow: bgColor4,
                  }}
                  className="bottoni-categorie"
                  onClick={(e) => {
                    this.cambiaGioco(3);
                    this.changeColorBlack(3);
                  }}
                >
                  Logica
                </button>
              </Col>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Col xs="12">
                <button className="button-principale" onClick={this.vaiAlGioco}>
                  {' '}
                  Avanti
                </button>
              </Col>
            </Row>
          </Container>
        )}

        {this.state.modalita_2 && (
          <Gioco
            cambiaModalita={this.cambiaModalita}
            nomeGiocatori={this.state.nomiGiocatori}
            categorie={this.state.all_categories}
          />
        )}

        {this.state.vai_al_gioco && (
          <Gioco
            cambiaModalita={this.cambiaModalita}
            nomeGiocatori={this.state.nomiGiocatori}
            categorie={this.state.categorie}
          />
        )}
      </div>
    );
  }
}

export default NomiGiocatori;
