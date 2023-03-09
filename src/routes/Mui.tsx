import { useState, useEffect, Fragment} from "react"

import { Button, Grid, Paper, Box, ButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFD700',
        },
        secondary: {
            main: '#C0C0C0',
        },
    },

    typography: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 30,

        h1: {
            fontSize: '10rem',
            fontWeight: 'bold'
        }
    }
})



const ProgressBar = () => {

}

import { CircularProgress } from "@mui/material";

const Mui = () => {


    return (
        <>
            <ThemeProvider theme={darkTheme}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </div>
            </ThemeProvider>
        </>
    )

}

export default Mui
