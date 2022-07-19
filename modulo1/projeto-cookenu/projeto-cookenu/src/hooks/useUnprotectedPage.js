import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToRecipeList } from "../routes/coordinator"


const useUnprotectedPage = () => {
    const navigate = useNavigate()
    const validation = () => {
        const token = localStorage.getItem("token")
        if(token){
            goToRecipeList(navigate)
        }
    }

    useLayoutEffect(validation, [navigate])
}

export default useUnprotectedPage