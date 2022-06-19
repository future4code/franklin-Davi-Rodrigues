import React from "react";
import styled from "styled-components";
import Logo from '../../logo-labenu.png'

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
`

const BoxTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Titulo = styled.h1`
    color: white;
    font-size: 100px;
    margin: 0;

    &:hover {
        cursor: pointer;
    }
`

const SubTitulo = styled.p`
    color: white;
    font-size: 30px;
`
function Home() {
    return (
        <Box>
            <BoxTitulo>
                <Titulo>Labefy</Titulo>
                <SubTitulo>Escute as melhores musicas aqui!</SubTitulo>
            </BoxTitulo>
            <img src={Logo}/>
        </Box>
    )
}

export default Home