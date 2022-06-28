import React from "react";
import styled from "styled-components";
import useTrips from "../../hooks/useTrips";

const DivViagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const DivViagem = styled.div`
    width: 500px;
    min-height: 200px;
    background-color: white;
    font-family: 'Open Sans';
    line-height: 24px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Item = styled.h2`
    font-weight: 700;
    color: darkgray;
`

const DivItem = styled.div`
    display: flex;
    gap: 5px;
    margin: 10px 15px;
`

function Viagem(props) {
    return (
        <DivViagens>
            <DivViagem>
                <DivItem>
                    <p><strong>Nome: </strong> {props.nome}</p>
                </DivItem>
                <DivItem>
                    <p><strong>Descrição: </strong> {props.descricao}</p>
                </DivItem>
                <DivItem>
                    <p><strong>Planeta: </strong> {props.planeta}</p>
                </DivItem>
                <DivItem>
                    <p><strong>Duração: </strong> {props.duracao}</p>
                </DivItem>
                <DivItem>
                    <p><strong>Data: </strong> {props.data}</p>
                </DivItem>
            </DivViagem>
        </DivViagens>
    )
}

export default Viagem