import React, { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa"
import { click } from "@testing-library/user-event/dist/click";

const DivViagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const DivViagem = styled.div`
    width: 500px;
    min-height: 100px;
    background-color: white;
    font-family: 'Open Sans';
    line-height: 24px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 15px;

    &:hover {
        background-color: lightgrey;
        cursor: pointer;
    }
`

const Icone = styled.div`
    &:hover {
        color: rgb(139, 0, 0);
        cursor: pointer;
    }
`

function Viagem(props) {
    const [state, setState] = useState(false)

    const click = () => {
        if(!state){
            props.click(props.id)
        }
    }

    const deleteTrip = () => {
        setState(true)
        props.deleteTrip(props.id)
    }
    return (
        <DivViagens>
            <DivViagem onClick={click}>
                <p><strong>{props.nome}</strong></p>
                <Icone>
                    <FaTrash onClick={deleteTrip} />
                </Icone>
            </DivViagem>
        </DivViagens>
    )
}

export default Viagem