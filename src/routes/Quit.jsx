/* MUI */
import {
  ThemeProvider,
  createTheme,
  Button,
  Container,
  Grid,
} from '@mui/material'

/* Atom */
import {useRecoilState} from 'recoil'

import {speedState} from '../state/Atom'
import {submitToggleState} from '../state/Atom'

const QuitTheme = createTheme({
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

const Quit = () => {
  const [submitToggle, setSubmitToggle] = useRecoilState(submitToggleState)

  const quitClick = () => {
    setSubmitToggle((prevState) => !prevState)
  }
  return (
    <>
      <ThemeProvider theme={QuitTheme}>
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
              onClick={quitClick}
              variant='outlined'
              sx={{
                fontSize: '20px',
                width: '368px',
                borderWidth: '1px',
              }}
            >
              종료
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default Quit
