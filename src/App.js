import React from 'react';
import styled from 'styled-components';
import Filtros from './secoes/Filtros';
import Home from './secoes/Home';
import Carrinho from './secoes/Carrinho';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 10px;
  margin: 20px;
  
`


export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Filtros/>
        <Home/>
        <Carrinho/>
      </MainContainer>
    );
  }
}

