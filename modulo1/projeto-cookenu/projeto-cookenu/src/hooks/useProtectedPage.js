import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"


const useProtectedPage = () => {
    const navigate = useNavigate()
    const validation = () => {
        const token = localStorage.getItem("token")
        if(!token){
            goToLogin(navigate)
        }
    }

    useLayoutEffect(validation, [navigate])
}

export default useProtectedPage