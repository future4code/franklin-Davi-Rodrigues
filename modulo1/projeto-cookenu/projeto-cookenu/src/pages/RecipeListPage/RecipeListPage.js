import { Button } from "@mui/material";
import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { Add } from '@material-ui/icons'
import { RecipeCardContainer, RecipeCardContent } from "../../components/RecipeCard/styled";
import { AddRecipeButton, RecipeListContainer } from "./styled";
import { goToAddRecipe, goToRecipeDetail } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function RecipeListPage() {
  const navigate = useNavigate()
  useProtectedPage()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  console.log(recipes)

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id)
  }

  const showRecipes = recipes.map((recipe) => {

    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )

  })

  return (
      <RecipeListContainer>
        {showRecipes}
        <AddRecipeButton color={"primary"} onClick={() => goToAddRecipe(navigate)}>
          <Add />
        </AddRecipeButton>
      </RecipeListContainer>
  );
}

export default RecipeListPage;
