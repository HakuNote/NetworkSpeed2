import {
  ThemeProvider,
  createTheme,
  Button,
  Container,
  Grid,
} from '@mui/material'

import {useRecoilState} from 'recoil'

/* Atom */
import {submitToggleState} from '../state/Atom'
import {timeStampState} from '../state/Atom'

const SubmitTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#000000',
    },
  },

  typography: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: 16,
  },
})

const Submit = () => {
  const [submitToggle, setSubmitToggle] = useRecoilState(submitToggleState)
  const [timeStamp, setTimeStamp] = useRecoilState(timeStampState)

  const options = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const submitClick = () => {
    setSubmitToggle((prevState) => !prevState)
    const now = new Date()
    setTimeStamp(now.toLocaleDateString(undefined, options))
  }
  return (
    <>
      <ThemeProvider theme={SubmitTheme}>
        <Grid container spacing={1} bgcolor=''>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={submitClick}
              variant='outlined'
              sx={{
                fontSize: '20px',
                width: '368px',
                borderWidth: '1px',
              }}
            >
              시작
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default Submit
