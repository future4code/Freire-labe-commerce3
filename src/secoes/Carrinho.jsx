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
    let valorTotal = 0

    for (const produto of this.props.carrinho) {
      if(produto.quantidade > 0){
        valorTotal = valorTotal + (produto.preco * produto.quantidade)
      }
    }

    const exibeCarrinho = this.props.carrinho
    .filter(produto => {
      return produto.quantidade > 0
    })
    .map(produto => {
    return ( 
      <div>
      <span>{produto.quantidade} X </span>
      <span>{produto.nome}</span>
      <button onClick={() => {this.props.aoClicar(produto.id)}}>Remover</button>
      </div>
    )
    })
    return (
      <ContainerCarrinho>
        <h2>Carrinho</h2>
        {exibeCarrinho}
        <p>Valor Total: {valorTotal.toFixed(2)}</p>
      </ContainerCarrinho>
    );
  }
}