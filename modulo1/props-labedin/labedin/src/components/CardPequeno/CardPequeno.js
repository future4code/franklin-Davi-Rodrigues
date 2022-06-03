import React from 'react';
import styled from 'styled-components';

const SmallcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 70px;
`

const ImageIcon = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

const SmallCardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    gap: 5px;
`

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <ImageIcon src={ props.imagem } />
            <SmallCardContent>
                <h4>{ props.titulo }:</h4>
                <p>{ props.conteudo }</p>
            </SmallCardContent>
        </SmallcardContainer>
    )
}

export default CardPequeno;