import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer } from "../LoginPage/styled";
import { RecipeContainer, RecipeImage } from "./styled";
import { Typography } from "@mui/material";

function RecipeDetailPage() {
  useProtectedPage()
  const param = useParams()
  const recipe = useRequestData({}, `${BASE_URL}/recipe/${param.id}`)[0]
  return (
    <ScreenContainer>
      <RecipeContainer>
        <RecipeImage src={recipe.image}/>
        <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
        <Typography align={'center'}>{recipe.description}</Typography>
      </RecipeContainer>
    </ScreenContainer>
  );
}

export default RecipeDetailPage;
