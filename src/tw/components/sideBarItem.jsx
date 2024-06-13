import { Grid, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const SideBarItem = ({ tweet }) => {
    return (


        <Grid container sx={{ backgroundColor: 'secondary.main', alignItems: 'center', textAlign: 'left' }}>

            <ListItemText
                primary={
                    <>
                        <Typography component="span" sx={{ fontSize: '0.9rem', color: 'error.main', fontWeight: 'bold' }}>
                            {tweet[1].displayName}:
                        </Typography>
                        <Typography component="span" sx={{ fontSize: '0.9rem', color: 'text.main', fontWeight: 'bold' }}>
                            {' ' + tweet[1].tw}
                        </Typography>
                    </>
                }
            />





        </Grid>

    )
}
