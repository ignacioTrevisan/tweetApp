import React from 'react'
import ComboBox from './comboBox'
import { Autocomplete, IconButton, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { filtrarTweets } from '../store/tw/twSlice';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { logOut } from '../store/auth/authSlice';

export const NavbarDos = ({ Display, setDisplay }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logOut())
    }

    return (
        <div className='navbar'>

            <div className='navbar_buttonMenu'>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}

                >
                    <MenuOutlined onClick={() => setDisplay(!Display)} />
                </IconButton>
            </div>
            <div className='navbar_comboBox'>
                <div className='comboBox'>
                    <ComboBox />
                </div>
            </div>
            <div className='navbar_buttonLogOut'>
                <IconButton color='error' onClick={onLogout}>
                    <LogoutOutlined />
                </IconButton>
            </div>
        </div>
    )
}
