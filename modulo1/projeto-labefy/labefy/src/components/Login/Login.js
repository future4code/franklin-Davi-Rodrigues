import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`
const Titulo = styled.h1`
    color: white;
`
const Form = styled.form`
    background-color: #000000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 30px;
    border-radius: 5%;
`
const Input = styled.input`
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
`

const Legenda = styled.p`
    max-width: 300px;
    margin: 5px 10px;
    font-size: 12px;
`

const Button = styled.button`
    margin: 15px 0;
    width: 100px;
    height: 30px;
    background-color: white;
    color: #000000;
    font-weight: bold;
    border: none;
    border-radius: 20px;

    &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
        transform: scale(1.05);
    }
`

function Login (props) {
    const [user, setUser] = useState('')

    const onChangeUser = (e) => {
        props.setUser(e.target.value)
    }

    const clicou = (e) => {
        e.preventDefault()
        alert("Logado")
        props.setUser(props.user)
    }

    return (
        <Box>
            <Form>
                <Titulo>Login</Titulo>
                <Input placeholder="ex: davi-rodrigues-franklin" value={props.user} onChange={onChangeUser}/>
                <Button onClick={clicou}>Logar</Button>
                <Legenda>Se vovê é aluno da labenu, então você já possui uma conta nao labefy! É só segui o padrão: pn-un-t *</Legenda>
                <Legenda>* pn: primeiro nome; un: último nome; t: turma</Legenda>
            </Form>
        </Box>
    )
}

export default Login