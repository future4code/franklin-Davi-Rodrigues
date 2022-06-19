import styled from "styled-components"

export const Cabecalho = styled.div`
    display: flex;
    color: white;
    background-color: #000000;
    width: 100vw;
    height: 80px;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    color: #000000;
    background-color: white;
    height: 40px;
    width: 60px;
    border: none;
    font-weight: bold;
    border-radius: 20px;

    &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
        transform: scale(1.05);
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-right: 20px;
`

export const Titulo = styled.h1`
    margin-left: 20px;
`

export const ItemMenu = styled.p`
    font-weight: bold;
    color: gray;
    
    &:hover {
        color: white;
        transform: scale(1.05);
        cursor: pointer;
    }
`