import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { produtos } from "../datas/produtos";
import { carrinho } from "../datas/produtos";

const DivHome = styled.div`
  grid-area: home;
`

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-bottom: 10px;
  & select {
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
  };
  & label {
    font-weight: bold;
  }
`

const PainelProdutos = styled.div`
  display: grid;
  margin-top: 30px;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
`
const Botao = styled.button`
  align-self: center;
  background-color: transparent;
  font-weight: bold;
  width: 50%;
  min-width: fit-content;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid black;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  };
  &:active {
    background-color: white;
    color: black;
  }
`

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  border: 1px solid transparent;
  padding-bottom: 10px;
  border-radius: 5px;
  &:hover {
        background-color: #eeeeee;
        border-color: #eeeeee;
  }
`

export default class Home extends React.Component { 
  state = {
    produtos: produtos,
    carrinho: carrinho
  }

  render() {
    const produtosMapeados = this.state.produtos
    .filter(produto => {
      return (
        (produto.preco >= this.props.valorMin) && 
        (produto.preco <= this.props.valorMax) &&
        (produto.nome.toLowerCase().includes(this.props.buscaNome.toLowerCase()))
        )
    })
    .sort((a, b) => {
      switch (this.props.ordem) {
        case "menorPreco":
          return a.preco - b.preco;  
        case "maiorPreco":
          return b.preco - a.preco;  
        default:
          return a.preco - b.preco;
          
      }
      
    })
    .map(produto => {
      return (
        <ContainerCard key={produto.id}>
          <Card
            imagem={produto.imagem} 
            nome={produto.nome} 
            preco={produto.preco} 
            descricao={produto.descricao}
          />
          <Botao onClick={() => {this.props.aoClicar(produto.id)}}>Adicionar</Botao>
      </ContainerCard>
     )
    })

    return (
      <DivHome>
            <Cabecalho>
                <span><strong>{produtosMapeados.length}</strong> produtos encontrados</span>
                <span>
                  <label htmlFor="ordem">Ordenar por: </label>
                  <select 
                  id="ordem"
                  value={this.props.ordem}
                  onChange={this.props.alterarOrdem}>
                    <option value="menorPreco">Menor Preço</option>
                    <option value="maiorPreco">Maior Preço</option> 
                  </select>
                </span>
            </Cabecalho>
            <PainelProdutos>
                {produtosMapeados}                
            </PainelProdutos>
      </DivHome>
    );
  }
}

