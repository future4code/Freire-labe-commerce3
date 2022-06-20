import React from "react";
import styled from "styled-components";
import botaoExcluir from "../img/excluir.png";

const ContainerCarrinho = styled.div`
  grid-area: carrinho;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  & > span:first-child {
    font-weight: bold;
    font-size: 24px;
  };
`

const TotalCompra = styled.div`
  background-color: #b2ddb2a4;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  & > div {
    padding: 5px;
  }
`

const FinalizarCompra = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    width: 100%;
    min-width: fit-content;
    padding: 10px 10px;
    background-color: black;
    color: white;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`

const ItemCarrinho = styled.span`
  background-color: #eeeeee;
  padding: 5px;
  display: grid;
  border-radius: 5px;
  grid-template-areas: 'nome nome'
                       'qtde remover';
  margin-bottom: 5px;
  & span:first-child {
    font-weight: bold;
    grid-area: nome;
  };
  & span:nth-child(2) {
    grid-area: qtde;
    margin: auto 0;
    display: flex;
    align-items: center;
  };
  & > button {
    grid-area: remover;
    background-image: url(${botaoExcluir});
    background-size: 100%;
    width: 28px;
    height: 28px;
    border: none;
    margin-left: auto;
    cursor: pointer;
    opacity: 80%;
    &:hover {
      opacity: 100%;
    }
  };
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
      <ItemCarrinho key={produto.id}>
        <span>{produto.nome}</span>
        <span>
          <button onClick={() => {this.props.subUm(produto.id)}}>-</button>
          &nbsp;&nbsp;<b>{produto.quantidade}</b>&nbsp;&nbsp; 
          <button onClick={() => {this.props.addUm(produto.id)}}>+</button></span>
        <button onClick={() => {this.props.excluiProduto(produto.id)}}></button>
      </ItemCarrinho>
    )
    })
    return (
      <ContainerCarrinho>
        <span>Carrinho</span>
        {exibeCarrinho}
        <TotalCompra>
          <strong>Total da compra:</strong> 
          <div>R$ <strong>{valorTotal.toFixed(2)}</strong></div>
        </TotalCompra>
        <FinalizarCompra>
          <button>Finalizar Compra</button>
        </FinalizarCompra>
      </ContainerCarrinho>
    );
  }
}