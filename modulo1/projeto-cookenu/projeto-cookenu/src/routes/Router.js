import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage"
import Header from "../components/Header/Header"

function Router(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<RecipeListPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/cadastro" element={<SignUpPage />}/>
                <Route path="/detalhe/:id" element={<RecipeDetailPage />}/>
                <Route path="/adicionar-receita" element={<AddRecipePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router