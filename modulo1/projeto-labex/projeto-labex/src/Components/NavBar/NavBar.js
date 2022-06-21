import React from "react";
import styled from "styled-components";
import '../../App.css';

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
    gap: 15px;
    margin-right: 30px;
`

const ItemMenu = styled.p`
    font-size: 16px;
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`

function NavBar(){
    return(
        <Nav>
            <Titulo>LabeX</Titulo>
            <Menu>
                <ItemMenu>Home</ItemMenu>
                <ItemMenu>Quem Somos?</ItemMenu>
                <ItemMenu>Contato</ItemMenu>
            </Menu>
        </Nav>
    )
}

export default NavBar