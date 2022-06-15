import React from "react";
import styled from "styled-components";


const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;   
    border: 1px solid black;
    padding-bottom: 10px;
    & span {
        margin-left: 10px;
    }
    & img{
        width: 100%;
    }
`
const Botao = styled.button`
    align-self: center;
`

export default class Card extends React.Component {
    render() {
      return (
        <CardProduto>
            <img src={this.props.imagem}/>
            <span>{this.props.nome}</span>
            <span>R$ {this.props.preco}</span>
            
            <Botao onClick={() => {this.props.adicionarProduto(this.props.nome, this.props.id, this.props.preco)}}>Adicionar</Botao>
        </CardProduto>
      );
    }
}