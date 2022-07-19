import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomeAdmin } from "../../routes/coordinator";
function Reload() {
    const navigate = useNavigate()
    const reload = () => {
        goToHomeAdmin(navigate)
    }
    useEffect(reload, [])
    return(
        <div>
        </div>
    )
}

export default Reload