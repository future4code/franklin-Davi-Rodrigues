import React, { useEffect, useState } from "react";
import {
  Bottom,
  Call,
  Filter,
  FilterContainer,
  FiltersContainer,
  Firulinha,
  TextFilterBy,
  Title,
  Top,
} from "./styles";

const apiKey = import.meta.env.VITE_API_KEY;

function Header() {
  const [filters, setFilters] = useState([]);

  const getFilters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFilters(data.genres);
  };

  useEffect(
    () => {
      getFilters(
        `https://api.themoviedb.org/3/genre/movie/list?${apiKey}&language=pt-BR`
      )},
    []
  );
  return (
    <>
      <Top>
        <Title>Labemovies</Title>
        <Firulinha />
      </Top>
      <Bottom>
        <Call>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Call>

        <FilterContainer>
          <TextFilterBy>Filtrar por:</TextFilterBy>
          <FiltersContainer>
            {filters.length > 0 && filters.map((filter) => <Filter key={filter.id}>{filter.name}</Filter>)}
          </FiltersContainer>
        </FilterContainer>
      </Bottom>
    </>
  );
}

export default Header;
