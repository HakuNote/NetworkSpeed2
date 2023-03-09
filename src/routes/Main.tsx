import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FiberManualRecord } from '@mui/icons-material';
import { fontWeight } from '@mui/system';

import Selection from "./Selection";
import ConnectionSpeed from './ConnectionSpeed.jsx';
import Circular from './Circular';
import Submit from './Submit';
import Quit from './Quit';
import Transmit from './Transmit';
import RunAxios from '../RunAxios';
import { speedState } from '../state/Atom';

import { Component } from 'react';

const darkTheme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#FFD700',
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#000000'
      },
  },

  typography: {

    body1: {
      fontFamily: 'Helvetica',
      fontSize: '2rem',
      fontWeight: 350,
      letterSpacing: '0.1rem',
    },
  },
})


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Webite
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// 최상단바
const SAppBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="relative" color='secondary' sx={{boxShadow: 'none', mt:0, mb: 0}}>
          <Toolbar sx={{ justifyContent: 'center', pt: 2, pb: 2}} >
            <FiberManualRecord color='primary' sx={{ mr: 2}} />
            <Typography variant='body1' color="primary" >
              CNU 공대5호관 WIFI 속도측정
            </Typography>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  )
}

// 최상단바 다음 요약
const Summary = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        bgcolor: 'background.default',
        pt: 5,
        pb: 5,
      }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="body1"
            align="center"
            color="primary"
            fontWeight="350"
            gutterBottom
          >
            사용방법
          </Typography>
          <Typography variant="h5" align="center" color="primary" paragraph>
            공대 5호관의 WIFI 속도 측정을 위해 설계되었으며{<br />}
            층수와 호수를 선택한 다음 시작 버튼을 눌러주세요.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>  
  )
}

// 마지막 풋터
const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.primary"
      component="p"
    >
      This is Temporary Footer
    </Typography>
    <Copyright />
  </Box>
  )
}

/* Atom Key */
import { submitToggleState } from '../state/Atom';

import { useRecoilState } from 'recoil';

import { timeStampState } from '../state/Atom';
import {passedTimeState} from '../state/Atom'

const Main = () => {
  const [submitToggle, setSubmitToggle] = useRecoilState(submitToggleState)

  const [timeStamp, setett] = useRecoilState(timeStampState)

  const [remainTime, setRemainTime] = useRecoilState(passedTimeState)

  const setSubmitToggleFunc = () => {
    setSubmitToggle((prev) => !prev)
  }

  const [spd, setSpd] = useRecoilState(speedState)

  return (
    <>
      <CssBaseline />
      <SAppBar />
      <Summary />
      <br />
      <Selection />
      {submitToggle ? <Submit /> :
        <>
          <ConnectionSpeed />
          {remainTime === 0  ? <Transmit /> : <Circular />}
        </>}
      {submitToggle ? <></> : <Quit />}
      <Footer />
      {/* {submitToggle ? "TRUE" : "False"} */}
      {/* <RunAxios /> */}
{/* 
      {timeStamp}
      <br />
      {remainTime}
      <br />
      {spd}
      <br />
      asdfasdf */}
    </>
  );
}



export default Main