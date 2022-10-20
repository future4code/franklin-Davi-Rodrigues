import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorCard from "../../components/ActorCard/ActorCard";
import { Title, Firulinha, Top, Bottom } from "../../components/Header/styles";
import Rate from "../../components/Rate/Rate";
import { formatDate } from "../../utils/formatDate";
import {
  GeneralInfos,
  Poster,
  MovieTitle,
  Infos,
  Cast,
  CastTitle,
  Container,
  DataMovie,
  Flex,
} from "./styles";

const apiKey = import.meta.env.VITE_API_KEY;
const moviesUrl = import.meta.env.VITE_API;
const language = import.meta.env.VITE_LANGUAGE;
const imagesUrl = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredit] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const getCredit = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setCredit(data);
  };

  useEffect(() => {
    const url = `${moviesUrl}${id}?${apiKey}&${language}`;
    getMovie(url);
  }, []);

  useEffect(() => {
    const url = `${moviesUrl}${id}/credits?${apiKey}&${language}`;
    getCredit(url);
  }, [movie]);

  const formatGenres = (genres) => {
    let result = "";
    (genres);
    genres.forEach((genre) => {
      result += ` ${genre.name},`;
    });
    return result.substring(0, result.length - 1);
  };
  (movie);
  return (
    <>
      {movie && credits && (
        <>
          <Top>
            <Title>Labemovies</Title>
            <Firulinha />
          </Top>
          <Bottom
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "row",
              paddingTop: "72px",
              paddingLeft: "112px",
              minHeight: "600px",
              gap: "33px",
            }}
          >
            <Poster src={imagesUrl + movie.poster_path} />
            <DataMovie>
              <GeneralInfos>
                <MovieTitle>{movie.title}</MovieTitle>
                <Infos>
                  {formatDate(movie.release_date)} •{" "}
                  {formatGenres(movie.genres)}
                </Infos>
              </GeneralInfos>
              <Flex gap="12px" align="center">
                <Rate value={Math.round(movie.vote_average * 10)} />
                <p
                  style={{ fontSize: "16px", color: "#fff", maxWidth: "102px" }}
                >
                  Avaliação dos usuários
                </p>
              </Flex>
              <Flex direction="column" style={{color: '#fff'}} gap="8px">
                <p style={{ fontSize: '20px', fontWeight: '700' }}>Sinopse</p>
                <p style={{ fontSize: '16px', lineHeight: '24px', color: '#DDDDDD', maxWidth: '700px' }}>{movie.overview}</p>
              </Flex>
            </DataMovie>
          </Bottom>
          <Container>
            <CastTitle>Elenco original</CastTitle>
            <Cast>
              {credits.cast.map((character) => (
                <ActorCard key={character.id} actor={character} />
              ))}
            </Cast>
          </Container>
        </>
      )}
    </>
  );
};

export default Movie;
