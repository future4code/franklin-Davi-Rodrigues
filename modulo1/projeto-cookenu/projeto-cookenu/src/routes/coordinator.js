export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToRecipeList = (navigate) => {
    navigate("/")
}
export const goToRecipeDetail = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToAddRecipe = (navigate) => {
    navigate("/adicionar-receita")
}