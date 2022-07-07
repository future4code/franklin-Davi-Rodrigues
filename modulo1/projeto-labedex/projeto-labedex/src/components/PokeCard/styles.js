import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

export const CardStyled = styled(Card)`
   margin : 10px 5px;
`

export const CardImage = styled(CardMedia)`
    min-height: max-content;
`

export const DivTypes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`