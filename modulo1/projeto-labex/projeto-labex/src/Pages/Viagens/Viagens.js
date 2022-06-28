import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Viagem from "../../Components/Viagem/Viagem";
import useTrips from "../../hooks/useTrips";
import "../../App.css" 
import styled from "styled-components";

import { Titulo } from "./../styles"

function Viagens() {
    const viagens = useTrips()
    console.log(viagens)

    const mostraViages = viagens.map((viagem) => {
            return <Viagem key={viagem.id} nome={viagem.name} descricao={viagem.description} data={viagem.date} duracao={viagem.durationInDays} planeta={viagem.planet} />
        })
    
    return(

        <div>
            <NavBar />
            <Titulo>Viagens</Titulo>
            {mostraViages}
        </div>
    )
}

export default Viagens