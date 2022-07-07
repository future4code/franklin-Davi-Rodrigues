import React, { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import { DivCards, DivPokemons, StyledPagination } from "./styles";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Pokemon() {
  //const pokemons = useRequestData({}, `${BASE_URL}/pokemon/`)
  const [pokemons, setPokemons] = useState({});
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setOffset((value - 1) * 20 + 1)
    if(value === 1){
        setOffset(0)
    }
    window.scrollTo(0, 0)
  };

  function getData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=21`)
      .then((response) => {
        setPokemons(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  }

  useEffect(getData, [offset]);
  console.log(pokemons);

  return (
    <DivCards>
      <DivPokemons>
        {!pokemons || pokemons === undefined || Object.keys(pokemons) < 1 ? (
          <Loading />
        ) : (
          pokemons.results.map((pokemon, index) => {
            return (
              <PokeCard
                key={index}
                name={pokemon.name}
                image={pokemon.url}
                id={index}
                offset={offset}
              />
            );
          })
        )}
      </DivPokemons>
      <Stack spacing={2}>
        <StyledPagination count={58} page={page} onChange={handleChange} color={"primary"}/>
      </Stack>
    </DivCards>
  );
}
