import axios from "axios";
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

function Criar (props) {
    const [nome, setNome] = useState('')
    
    const criarPlaylist = () => {
        const body = {
            name: nome
          }
        const headers = {
            headers: {
              Authorization: props.user
            }
        }
        console.log(props.user)
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, headers)
    }

    const onChangeUser = (e) => {
        setNome(e.target.value)
    }

    const clicou = (e) => {
        e.preventDefault()
        alert("Criado")
        setNome(nome)
        criarPlaylist()
    }

    return (
        <Box>
            <Form>
                <Titulo>Criar Playlist</Titulo>
                <Input placeholder="Nome da playlist" value={nome} onChange={onChangeUser}/>
                <Button onClick={clicou}>Criar</Button>
            </Form>
        </Box>
    )
}

export default Criar