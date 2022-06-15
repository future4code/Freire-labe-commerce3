import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Carrinho from "./Carrinho";

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

export default class Home extends React.Component {
    render() {
      return (
        <div>
            <Cabecalho>
                <span>Quantidade de produtos</span>
                <span>Ordenação</span>
            </Cabecalho>
            <PainelProdutos>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </PainelProdutos>
        </div>
      );
    }
}