import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { produtos } from "../datas/produtos";
import { carrinho } from "../datas/produtos";



const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`

const PainelProdutos = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
`
const Botao = styled.button`
  align-self: center;
`

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
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
        (produto.preco >= this.props.valorMin) &&
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
      <div>
            <Cabecalho>
                <span>Quantidade de produtos: {produtosMapeados.length}</span>
                <span>
                  <label htmlFor="ordem">Ordenação: </label>
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
      </div>
    );
  }
}

