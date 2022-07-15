import React from "react";
import styled from "styled-components";

const FiltroContainer = styled.div`
  grid-area: filtros;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: none;
  padding: 0 10px;
  & div:first-child {
    padding: 5px;
    font-size: 24px;
    font-weight: bold;

  };
  & div:last-child {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 0;
    justify-content: space-evenly;
    & span {
      display: flex;
      gap: 5px;
      flex-wrap: nowrap;
      width: fit-content;
    }
    & span label {
      font-weight: bold;
    }
    & span input {
      border: none;
      border-bottom: 1px solid gray;
      outline: none;
    }
    & span input[type=number] {
      max-width: 60px;
    }
  };

`

export default class Filtros extends React.Component {
  
  render() {
    return (
      <FiltroContainer>
        <div>
          Filtros
        </div>
        <div>
          <span>
            <label htmlFor="valor-min">Valor mínimo:</label>
            <input 
            id="valor-min"
            type="number"
            value={this.props.valorMin}
            onChange={this.props.aoDigitarMin}
            />
          </span>
          
          <span>
            <label htmlFor="valor-max">Valor máximo:</label>
            <input
            id="valor-max"
            type="number"
            value={this.props.valorMax}
            onChange={this.props.aoDigitarMax}
            />
          </span>
          
          <span>
            <label htmlFor="nome">Buscar por nome:</label>
            <input
            id="nome"
            type="text"
            value={this.props.buscaNome}
            onChange={this.props.aoDigitarNome}
            />
          </span>
          
        </div>
        

      </FiltroContainer>
    );
  }
}