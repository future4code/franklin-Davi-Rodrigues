import React from "react";
import styled from "styled-components";
import NavBar from "../../Components/NavBar/NavBar";
import '../../App.css';
import Image from '../../bro.svg'

const DivHome = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`

const DivTexto = styled.div`
    margin-left: 30px;
`
const Img  = styled.img`
    height: 500px;
`

const Titulo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
`

const Chamada = styled.p`
    font-family: 'Open Sans', sans-serif;
    margin-top: 20px;
    font-size: 25px;
    max-width: 550px;
`

const Button = styled.button`
    background-color: white;
    width: 120px;
    height: 40px;
    border: none;
    color: #263238;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

function Home(){
    return (
        <div>
            <NavBar/>
            <DivHome>
                <DivTexto>
                    <Titulo>Que Viagem é essa?</Titulo>
                    <Chamada>Somos o site que vai planeja as suas proximas viagens</Chamada>
                    <Button>Comece Agora</Button>
                </DivTexto>
                <Img src={Image}/>
            </DivHome>
        </div>
    )
}

export default Home

