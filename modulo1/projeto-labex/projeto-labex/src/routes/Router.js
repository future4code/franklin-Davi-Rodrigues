import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Viagens from '../Pages/Viagens/Viagens'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import Reload from '../Pages/Reload/Reload'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/trips/list' element={<Viagens />} />
                <Route path='/trips/application' element={<ApplicationFormPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin/trips/list' element={<AdminHomePage />} />
                <Route path='/admin/trips/create' element={<CreateTripPage />} />
                <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
                <Route path='/reload' element={<Reload />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router