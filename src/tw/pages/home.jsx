import React, { useEffect, useState } from 'react'
import { SideBar } from '../components/sideBar'
import { SocialArea } from './socialArea'
import { LoadTrendingsAndTweets } from '../../hooks/loadTrendingsAndTweets'
import { useSelector } from 'react-redux'
import { LoadPage } from '../../ui/loadPage'
import { Box, CssBaseline, Grid } from '@mui/material'
import { Navbar } from '../../ui/navbar'
import { NavbarDos } from '../../ui/navbarDos'



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
            <SideBar Display={Display} setDisplay={setDisplay} />
            <NavbarDos Display={Display} setDisplay={setDisplay} />
            {/* <Navbar Display={Display} setDisplay={setDisplay} /> */}
            <SocialArea Display={Display} setDisplay={setDisplay} />


        </>
    )
}
