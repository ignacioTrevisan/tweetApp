import React, { useEffect } from 'react'
import '../../sideBar.css';
import { Box, Drawer, Grid, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarListItem } from './sideBarListItem';
export const SideBarDos = ({ Display, setDisplay }) => {

    const { trending, otherTweets } = useSelector(state => state.tw)
    useEffect(() => {
        if (Display === true) {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('inactive');

        } else {
            sidebar.classList.remove('inactive');
        }
    }, [Display])



    return (
        <>
            <div id="sidebar" class="sidebar">
                <div className='child'>
                    <button class="close-sidebar" id="close-sidebar" onClick={() => setDisplay(!Display)}>×</button>

                </div>
                <div className='title'>




                    <Typography variant='h3' noWrap component='div' sx={{ marginLeft: { lg: 0, md: 8, sm: 19 } }}>
                        Tendencias
                    </Typography>


                </div>
                <div className='content'>

                    {


                        <SideBarListItem hash={trending} tws={otherTweets} Display={Display} setDisplay={setDisplay} />
                    }
                </div>

            </div >
        </>
    )
}
