import React from 'react'
import { useSelector } from 'react-redux';
import { Home } from '../tw/pages/home';
import { LoginPage } from '../auth/pages/loginPage';
import { Navigate, Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/routes/authRoutes';
import { TwRoutes } from '../tw/routes/twRoutes';
import { LoadPage } from '../ui/loadPage';
import { UseCheckStatus } from '../hooks/useCheckStatus';
import { Grid } from '@mui/material';

export const AppRouter = () => {

    const { status } = UseCheckStatus();
    if (status === 'Checking') {
        return <LoadPage />
    }
    return (
        <Grid sx={{ backgroundColor: '#D4EEFF' }}>
            <Routes>

                {
                    status === 'logged'
                        ? <Route path='/*' element={<TwRoutes />} />
                        : <Route path='/auth/*' element={<AuthRoutes />} />

                }{
                    status !== 'logged' && <Route path='/*' element={<Navigate to='/auth/login' />} />
                }
            </Routes>
        </Grid>
    )
}
