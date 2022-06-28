import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TripDetailsPage() {

    const params = useParams()
    const [details, setDetails] = useState()
    const token = localStorage.getItem("token")
    const getDatailTrips = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log(response)
        })
    }

    useEffect(getDatailTrips, [])

    return(
        <div>
            <h1>TripDetailsPage</h1>
        </div>
    )
}

export default TripDetailsPage