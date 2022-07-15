import React from "react";
import styled from "styled-components";
import logoLoja from "../img/logo-loja.jpg";

const DivHeader = styled.div`
    background-color: black;
    width: 100vw;
    text-align: center;
    & img {
        width: 200px;
    }
`

export default class Header extends React.Component {
    render() {
        return (
            <DivHeader>
                <img src={logoLoja} alt="Logo SpaceShirts" />
            </DivHeader>
        )
    }
}