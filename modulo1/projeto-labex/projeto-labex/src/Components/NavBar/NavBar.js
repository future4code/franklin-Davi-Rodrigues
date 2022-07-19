import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../../App.css';
import { goToHome, goToTrips, goToLogin } from "../../routes/coordinator";

const Nav = styled.div`
    width: 100vw;
    height: 80px;
    color: white;
    font-family: 'Open Sans', sans-serif;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px #FFFFFFCC;
`
const Titulo = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-left: 30px;
    
    &:hover {
        cursor: pointer;
    }
`

const Menu = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 30px;
`

const ItemMenu = styled.p`
    font-size: 16px;
    font-weight: 400;

    &:hover {
        cursor: pointer;
        color: #263238;
    }
`

function NavBar(){
    const navigate = useNavigate()

    return(
        <Nav>
            <Titulo>LabeX</Titulo>
            <Menu>
                <ItemMenu onClick={() => goToHome(navigate)}>Home</ItemMenu>
                <ItemMenu onClick={() => goToTrips(navigate)}>Ver viagens</ItemMenu>
                <ItemMenu onClick={() => goToLogin(navigate)}>Área restrita</ItemMenu>
            </Menu>
        </Nav>
    )
}

export default NavBar