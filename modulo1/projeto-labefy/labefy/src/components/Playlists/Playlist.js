import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: white;
`
const Box = styled.div`
    background-color: #000000;
    margin: 0 30px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 15px;
`
const DivTitulo = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DivMusicas = styled.div`
    color: white;
`
const DivBotoes = styled.div`
    display: flex;
    align-items: center;
`
const Excluir = styled.button`
    background-color: white;
    color: #000000;
    font-weight: bold;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;

    &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
        transform: scale(1.05);
    }
`
const Ver = styled.button`
    background-color: #000000;
    color: white;
    font-weight: bold;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;

    &:hover {
        color: #f9f9f9;
        cursor: pointer;
        transform: scale(1.05);
    }
`

function Playlist(props) {
    const remover = () => {
        props.setId(props.id)
        console.log(props.estado)
        props.func()
    }

    const verMusicas = () => {
        props.setId(props.id)
        props.verMusicas()
    }
    return(
        <Box>
            <DivTitulo>
                <Titulo>{props.nome}</Titulo>
                <DivBotoes>
                <Ver onClick={verMusicas}>&#709;</Ver>
                <Excluir onClick={remover}>X</Excluir>
                </DivBotoes>
            </DivTitulo>

            <DivMusicas>
                {props.mostrarMusicas}
            </DivMusicas>

        </Box>
    )
}

export default Playlist