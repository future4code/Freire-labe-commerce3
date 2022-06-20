import React from "react";
import styled from "styled-components";
import logoLoja from "../img/logo-loja.jpg";
import iconeInsta from "../img/instagram.png";
import iconeGithub from "../img/github.png";
import iconeLinkedin from "../img/linkedin.png";

const DivFooter = styled.div`
    background-color: black;
    color: white;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;
    justify-content: space-around;
    & ul {
        list-style: none;
    }
    & p {
        margin-bottom: 10px;
    }
    & div:first-child ul {
        display: flex;
        justify-content: space-evenly;
        & img {
            width: 24px;
        }
    }
    & div:nth-child(2) img {
        width: 150px;
    }

`

export default class Footer extends React.Component {
    render() {
        return (
            <DivFooter>
                <div>
                    <p>Siga-nos nas redes sociais:</p>
                    <ul>
                        <a href="https://www.instagram.com/" target="_blank">
                            <li><img src={iconeInsta} /></li>
                        </a>
                        <a href="https://www.github.com/" target="_blank">
                            <li><img src={iconeGithub} /></li>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <li><img src={iconeLinkedin} /></li>
                        </a>
                    </ul>
                </div>
                <div><img src={logoLoja}/></div>
                <div>
                    <p>Integrantes do gurpo:</p>
                    <ul>
                        <li>Arlindo Vinícius</li>
                        <li>Lucas Teles</li>
                        <li>Pablo Leão</li>
                    </ul>
                </div>
                
            </DivFooter>
        )
    }
};