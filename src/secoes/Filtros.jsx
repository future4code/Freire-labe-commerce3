import React from "react";
import styled from "styled-components";

const FiltroContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
padding: 0 10px;
& input{
  margin-bottom: 15px;
}

`

export default class Filtros extends React.Component {
  
  state = {
    
  }

  render() {
    return (
      <FiltroContainer>
        <h2>Filtros</h2>
        <label htmlFor="valor-min">Valor mínimo:</label>
        <input 
        id="valor-min"
        type="number"
        value={this.props.valorMin}
        onChange={this.props.aoDigitarMin}
        />

        <label htmlFor="valor-max">Valor máximo:</label>
        <input
        id="valor-max"
        type="number"
        value={this.props.valorMax}
        onChange={this.props.aoDigitarMax}
        />
        
        <label htmlFor="nome">Busca por nome:</label>
        <input
        id="nome"
        type="text"
        value={this.props.buscaNome}
        onChange={this.props.aoDigitarNome}
        />

      </FiltroContainer>
    );
  }
}