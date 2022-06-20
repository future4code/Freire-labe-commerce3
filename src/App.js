import React from 'react';
import styled from 'styled-components';
import Filtros from './secoes/Filtros';
import Home from './secoes/Home';
import Carrinho from './secoes/Carrinho';
import { carrinho } from "./datas/produtos";
import './App.css';
import Footer from './secoes/Footer';
import Header from './secoes/Header';

const Pagina = styled.div`
  width: 100vw;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:'filtros carrinho'
                      'home carrinho';
  grid-template-columns: 4fr 1fr;
  column-gap: 10px;
  margin: 20px;
  font-family: 'Roboto', sans-serif;
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

  removerProduto = (id) => {
    const novoCarrinho = this.state.carrinho.map(produto => {
      if(produto.id === id){
        return {...produto, quantidade: produto.quantidade - 1}
      }else{
        return produto
      }
    })
    this.setState({carrinho: novoCarrinho})
  }

  removerTodos = (id) => {
    const novoCarrinho = this.state.carrinho.map(produto => {
      if(produto.id === id){
        return {...produto, quantidade: 0}
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
    document.title = 'Home - SpaceShirts'
    return (
      <Pagina>
        <Header/>
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
          excluiProduto={this.removerTodos}
          addUm={this.adicionarProduto}
          subUm={this.removerProduto}
          />
        </MainContainer>
        <Footer/>
      </Pagina>
    );
  }
}

