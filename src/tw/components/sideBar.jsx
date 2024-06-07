import { Box, Divider, Drawer, Grid, IconButton, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarListItem } from "./sideBarListItem";
import { useEffect } from "react";
import 'animate.css';

export const SideBar = ({ Display, setDisplay }) => {

    const { trending, otherTweets } = useSelector(state => state.tw)


    return (


        <Box
            component='nav'
            sx={{ flexShrink: { sm: 0 }, pl: 30 }}

        >

            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: !Display ? 'none' : 'block', sm: 'block' },

                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { lg: '480px', md: '400px', sm: '320px' }, backgroundColor: 'secondary.main' }
                }}
            >
                <Toolbar sx={{ backgroundColor: 'secondary.main' }}>
                    <Grid container justifyContent={'center'} width={'100%'}>

                        <Typography variant='h3' noWrap component='div'>
                            Tendencias
                        </Typography>
                    </Grid>
                </Toolbar>


                {


                    <SideBarListItem hash={trending} tws={otherTweets} Display={Display} setDisplay={setDisplay} />
                }



            </Drawer>
        </Box >

    )
}