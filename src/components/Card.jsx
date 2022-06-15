import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;   
    border: 1px solid black;
    padding-bottom: 10px;
    & span {
        margin-left: 10px;
    }
`
const Botao = styled.button`
    align-self: center;
`

export default class Card extends React.Component {
    render() {
      return (
        <CardProduto>
            <img src="https://picsum.photos/200/200?a=2"/>
            <span>Produto</span>
            <span>Preço</span>
            <Botao onClick=''>Adicionar ao carrinho</Botao>
        </CardProduto>
      );
    }
}