import React from "react";
import styled from "styled-components";


const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;   
    padding-bottom: 10px;
    & span {
        margin-left: 10px;
    }
    & img{
        width: 100%;
    }
`

export default class Card extends React.Component {

    state = {
        carrinho: [],
        produtoAdicionado: {}
    }

   
    render() {
      return (
        <CardProduto>
            <img src={this.props.imagem}/>
            <span>{this.props.nome}</span>
            <span>R$ {this.props.preco}</span>            
        </CardProduto>
      );
    }
}