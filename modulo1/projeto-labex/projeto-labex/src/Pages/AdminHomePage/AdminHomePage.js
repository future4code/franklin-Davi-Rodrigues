import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomeAdmin, goToLogin, goToReload, goToTripDetail } from "../../routes/coordinator";
import NavBar from "../../Components/NavBar/NavBar";
import { Titulo } from "../styles"
import useTrips from "../../hooks/useTrips"
import Viagem from "../../Components/ViagemAdmin/Viagem";
import axios from "axios";

function AdminHomePage() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const validation = () => {
        if(token == null){
            goToLogin(navigate)
        }
    }

    useEffect(validation, [])
    const viagens = useTrips()
    console.log(viagens)

    const click = (id) => {
        goToTripDetail(navigate, id)
    }

    const deleteTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-rodrigues-franklin/trips/${id}`, {
            headers: {
                "Content-Type": "application/json",
                auth: token,
            }
        }).then((response) => {
            goToReload(navigate)
        })
    }

    const mostraViages = viagens.map((viagem) => {
            return <Viagem key={viagem.id} nome={viagem.name} click={click} id={viagem.id} deleteTrip={deleteTrip}/>
        })
    
    return(

        <div>
            <NavBar />
            <Titulo>Viagens</Titulo>
            {mostraViages}
        </div>
    )
}

export default AdminHomePage