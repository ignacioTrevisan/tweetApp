import React, { useEffect, useState } from 'react'

import { SocialArea } from './socialArea'
import { LoadTrendingsAndTweets } from '../../hooks/loadTrendingsAndTweets'
import { useSelector } from 'react-redux'
import { LoadPage } from '../../ui/loadPage'
import { Box, CssBaseline, Grid } from '@mui/material'
import { NavbarDos } from '../../ui/navbarDos'
import { SideBarDos } from '../components/sideBarDos'



export const Home = () => {
    const { status } = useSelector(state => state.tw);
    LoadTrendingsAndTweets();
    const [Display, setDisplay] = useState(false);


    if (status === 'Loading') {
        return <LoadPage />
    }
    return (
        <>
            <CssBaseline />

            <NavbarDos Display={Display} setDisplay={setDisplay} />
            <SocialArea Display={Display} setDisplay={setDisplay} />
            <SideBarDos Display={Display} setDisplay={setDisplay} />


        </>
    )
}
