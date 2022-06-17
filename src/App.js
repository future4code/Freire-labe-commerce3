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
    carrinho: carrinho
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
  
  render() {
    return (
      <MainContainer>
        <Filtros/>
        <Home
        aoClicar ={this.adicionarProduto}
        />
        <Carrinho
        carrinho ={this.state.carrinho}
        aoClicar={this.aoRemover}
        />
      </MainContainer>
    );
  }
}

