import React from 'react';
import styled from 'styled-components';
import Filtros from './secoes/Filtros';
import Home from './secoes/Home';
import Carrinho from './secoes/Carrinho';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 10px;
  margin: 20px;
  
`


export default class App extends React.Component {
  state = {
    carrinho: []
  }
  adicionarProduto = (nome, id, preco) => {
    console.log("adicionei");
    const produtoAdicionado = {
      id: id,
      nome: nome,
      preco: preco,
      quantidade: 1
    }
    const jaAdicionado = this.state.carrinho.filter(produto => {
      return produto.id === id
    })

    let  carrinhoAtualizado

    if(jaAdicionado){
      carrinhoAtualizado = this.state.carrinho.map(produto => {
        if(produto.id === id){
          return {...produto, quantidade: produto.quantidade + 1}
        }else return produto
      })
    }else{
      carrinhoAtualizado = [...this.state.carrinho, produtoAdicionado]
    }
    this.setState({carrinho: carrinhoAtualizado})
    console.log(this.state.carrinho)
  }
  render() {
    return (
      <MainContainer>
        <Filtros/>
        <Home
        adicionarProduto={this.adicionarProduto}
        />
        <Carrinho/>
      </MainContainer>
    );
  }
}

