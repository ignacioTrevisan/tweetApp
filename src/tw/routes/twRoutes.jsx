import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Home } from '../pages/home'

export const TwRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/register/' element={<RegisterPage />} /> */}
            <Route path='/*' element={<Navigate to='/' />} />
            {/* <Route path='/login/*' element={<Navigate to='/login' />} /> */}
        </Routes>
    )
}
