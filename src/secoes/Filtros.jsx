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
    render() {
      return (
        <FiltroContainer>
          <h2>Filtros</h2>
          <span> Valor mínimo:</span>
          <input type="number"/>
          <span> Valor máximo:</span>
          <input type="number"/>
          <span> Busca por nome:</span>
          <input type="text"/>

        </FiltroContainer>
      );
    }
}