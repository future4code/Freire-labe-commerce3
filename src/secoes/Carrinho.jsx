import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
border: 1px solid black;
padding: 0 10px;
& div{
display: flex;
justify-content: space-between;
}
`


export default class Carrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho</h2>
        <div>
          <span>7x</span>
          <span>Produto</span>
          <button>Remover</button>
        </div>
        <p>Valor Total:</p>
      </ContainerCarrinho>
    );
  }
}