import { useEffect, useState } from "react";
import axios from "axios";

function useTrips () {
    const [trips, setTrips] = useState([])
    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-rodrigues-franklin/trips')
        .then((response) => {
            setTrips(response.data.trips)
        })
    }

    useEffect(getTrips, [])
    return trips
}

export default useTrips