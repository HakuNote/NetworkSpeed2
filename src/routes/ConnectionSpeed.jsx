import {ReactInternetSpeedMeter} from 'react-internet-meter'
import {Fragment, useState} from 'react'

import {useRecoilState} from 'recoil'
import {speedState} from '../state/Atom'
import {timeStampState} from '../state/Atom'

import {Typography, Container} from '@mui/material'

import {useEffect} from 'react'

const ConnectionSpeed = () => {
  const [speed, setSpeed] = useRecoilState(speedState)
  const [speedUnit, setSpeedUnit] = useState(0)

  // useEffect(() => {
  //   setSpeed((prevSpeed) => [...prevSpeed, speedUnit])
  // }, [speedUnit])

  return (
    <Fragment>
      <ReactInternetSpeedMeter
        txtSubHeading='CNU-WIFI-MEASUREMENT-2023'
        outputType='empty' // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={1000} // milliseconds
        txtMainHeading='ThisIsSoDifficultThatIhateThis...'
        thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte"
        threshold={10}
        imageUrl='https://raw.githubusercontent.com/HakuNote/ImageStorage/f2fe6612e8c6c2875129addc610023df446ab53e/Winter.jpg'
        downloadSize='492425' // 이미지 크기
        callbackFunctionOnNetworkTest={(data) => setSpeed(data)}
        // callbackFunctionOnNetworkTest={(data) => setSpeed(data)}

        // callbackFunctionOnNetworkDown={(speed) =>
        //   console.log(`InternetSpeedIsDown ${speed}`)
        // }
      />
      {/* <Container>
        <Typography variant='h1' color='primary' align='center'>
          {speed} MB/s
        </Typography>
      </Container> */}
    </Fragment>
  )
}

export default ConnectionSpeed
