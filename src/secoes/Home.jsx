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

`

export default class Home extends React.Component { 
  state = {
    produtos: produtos,
    carrinho: carrinho
  }

  render() {
    const produtosMapeados = this.state.produtos.map((produto) => {
      return (
        <ContainerCard>
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
                <span>Quantidade de produtos</span>
                <span>Ordenação</span>
            </Cabecalho>
            <PainelProdutos>
                {produtosMapeados}                
            </PainelProdutos>
      </div>
    );
  }
}

