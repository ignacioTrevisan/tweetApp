import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import ComboBox from './comboBox'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/auth/authSlice';
import { useEffect } from 'react';


export const Navbar = ({ Display, setDisplay }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logOut())
    }


    return (
        <AppBar
            position="fixed"
            sx={{
                width: { lg: `calc(100% - 480px)`, md: 'calc(100% - 400px)', sm: 'calc(100% - 320px)' },
                ml: { sm: `${Display ? 480 : 0}px` },
                height: '72px'
            }}
            className='navbar'
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    onClick={() => setDisplay(!Display)}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container justifyContent={'center'} mt={1}>
                    <ComboBox />
                </Grid>
                <Grid container justifyContent={'end'}>
                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
