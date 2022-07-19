export const goToHome = (navigate) => {
    navigate("/")
}

export const goToTrips = (navigate) => {
    navigate("/trips/list")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToHomeAdmin = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToTripDetail = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToReload = (navigate) => {
    navigate("/reload")
}