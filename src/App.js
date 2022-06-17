import React from 'react';
import styled from 'styled-components';
import Filtros from './secoes/Filtros';
import Home from './secoes/Home';
import Carrinho from './secoes/Carrinho';
import { carrinho } from "./datas/produtos";


const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 10px;
  margin: 20px;
  
`

export default class App extends React.Component {
  state = {
    carrinho: carrinho,
    inputValorMin: 0,
    inputValorMax: 1000,
    inputBuscaNome: '',
    ordem: "menorPreco"
  }

  adicionarProduto = (id) => {
    const novoCarrinho = this.state.carrinho.map(produto => {
      if(produto.id === id){
        return {...produto, quantidade: produto.quantidade + 1}
      }else{
        return produto
      }
    })
    this.setState({carrinho: novoCarrinho})
  }

  aoRemover = (id) => {
    const novoCarrinho = this.state.carrinho.map(produto => {
      if(produto.id === id){
        return {...produto, quantidade: produto.quantidade - 1}
      }else{
        return produto
      }
    })
    this.setState({carrinho: novoCarrinho})
  }

  aoDigitarMin = (event) => {
    this.setState({inputValorMin: event.target.value})
  }

  aoDigitarMax = (event) => {
    this.setState({inputValorMax: event.target.value})
  } 

  aoDigitarNome = (event) => {
    this.setState({inputBuscaNome: event.target.value})
  }

  alterarOrdem = (event) => {
    this.setState({ordem: event.target.value})
  }
  
  render() {
    return (
      <MainContainer>
        <Filtros
        valorMin={this.state.inputValorMin}
        aoDigitarMin={this.aoDigitarMin}
        valorMax={this.state.inputValorMax}
        aoDigitarMax={this.aoDigitarMax}
        buscaNome={this.state.inputBuscaNome}
        aoDigitarNome={this.aoDigitarNome}
        />
        <Home
        aoClicar ={this.adicionarProduto}
        valorMin={this.state.inputValorMin}
        valorMax={this.state.inputValorMax}
        buscaNome={this.state.inputBuscaNome}
        ordem={this.state.ordem}
        alterarOrdem={this.alterarOrdem}
        />
        <Carrinho
        carrinho ={this.state.carrinho}
        aoClicar={this.aoRemover}
        />
      </MainContainer>
    );
  }
}

