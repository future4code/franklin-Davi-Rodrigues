import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import { MoviesContainer, PageContainer } from './styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const apiKey = import.meta.env.VITE_API_KEY;
const moviesUrl = import.meta.env.VITE_API_DISCOVER
const language = import.meta.env.VITE_LANGUAGE

const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  }
  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    console.log(data);

    setMovies(data.results)
  }

  useEffect(() => {
    const url = `${moviesUrl}?${apiKey}&${language}&page=${page}`
    getMovies(url)
  }, [page])

  return (
    <PageContainer>
    <MoviesContainer>
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </MoviesContainer>

    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
    
    </PageContainer>
  )
}

export default Home