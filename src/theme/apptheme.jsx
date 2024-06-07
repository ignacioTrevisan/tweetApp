import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { WhiteTheme } from './whiteTheme'
import { CssBaseline } from '@mui/material'

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={WhiteTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
