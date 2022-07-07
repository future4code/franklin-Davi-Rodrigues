import { grey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const DivType = styled.div`
    background-color: ${props => props.color};
    width: 60px;
    text-align: center;
    padding: 10px;
    margin: 5px;
    border-radius: 30px;
    text-transform: capitalize;
`

const Title = styled.p`
    margin: 0;
    color: white;
    font-weight: 700;
`

export default function PokeTypes (props) {
    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    const type = (type) => {
        const style = {
            background: '',
            color: ''
        }
        switch(type){
            case 'grass':
                style.background = 'green'
                style.color = '#ffffff'
                return style
            default:
                style.background = 'grey'
                style.color = 'black'
                return style
        }
    }
    const style = type(props.type)
    console.log(colours[props.type])
    return (
      <DivType
        color={colours[props.type]}
      >
          <Title
            color={style.color}
          >{props.type}</Title>
      </DivType>
    )
}