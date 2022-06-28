import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../Components/NavBar/NavBar";
import { goToHomeAdmin } from "../../routes/coordinator";

import { Titulo } from "./../styles"

const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    padding: 10px 10px;
    border-radius: 8px;
    border: none;

    &:focus {
        outline: none;
    }
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    gap: 5px;
`
const Button = styled.button`
    width: 160px;
    padding: 8px;
    border-radius: 8px;
    background-color: white;
    border: none;
    color: #263238;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    &:hover {
        cursor: pointer;
        transition: all .5s;
        background-color: #263238;
        color: white;
    }
`
function LoginPage() {
    const [email, setInputEmail] = useState('')
    const [senha, setInputSenha] = useState('')

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
        setInputSenha(e.target.value)
    }

    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        const body = {
            email: email,
            password: senha
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-rodrigues-franklin/login", body)
        .then((response) => {
            if(response.data.success){
                localStorage.setItem("token", response.data.token)
                goToHomeAdmin(navigate)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <NavBar />
            <Titulo>Login</Titulo>
            <form>
                <DivLogin>
                    <DivInput>
                        <p>Email</p>
                        <Input placeholder="Digite seu email:" type="email" onChange={onChangeEmail} value={email}/>
                    </DivInput>
                    <DivInput>
                        <p>Senha</p>
                        <Input placeholder="senha:" type="password" onChange={onChangeSenha} value={senha}/>
                    </DivInput>
                      <Button onClick={login}>Entrar</Button>
                </DivLogin>
            </form>
        </div>
    )
}

export default LoginPage