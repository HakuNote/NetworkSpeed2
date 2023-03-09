import {useState, useEffect, Fragment} from 'react'
import {Button, Grid, Paper, Box, ButtonGroup} from '@mui/material'
import {createTheme, ThemeProvider, styled} from '@mui/material/styles'

import {useRecoilState} from 'recoil'

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
      fontWeight: 'bold',
    },
  },
})

import {CircularProgress} from '@mui/material'

import {passedTimeState} from '../state/Atom'

const Circular = () => {
  const [remainTime, setRemainTime] = useRecoilState(passedTimeState)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    if (remainTime === -1) {
      clearInterval(intervalId)
    }
  }, [remainTime, intervalId])

  useEffect(() => {
    const id = setInterval(() => {
      setRemainTime((prevSeconds) => prevSeconds - 1)
    }, 1000)

    setIntervalId(id)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress size={100} thickness={5} />
        </div>
        <br />
      </ThemeProvider>
    </>
  )
}

export default Circular
