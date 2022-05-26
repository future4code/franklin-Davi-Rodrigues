import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImageIcon = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const Title = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImageIcon src={ props.imagem } />
            <BigCardContent>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </BigCardContent>
        </BigCardContainer>
    )
}

export default CardGrande;