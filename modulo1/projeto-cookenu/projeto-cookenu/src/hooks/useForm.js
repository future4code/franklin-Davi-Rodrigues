import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputChange = (evento) => {
        const {name, value} = evento.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm