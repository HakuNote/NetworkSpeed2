import {Fragment, useState, useEffect} from 'react'

import {useRecoilState} from 'recoil'
import {useRecoilValue} from 'recoil'
import {passedTimeState} from '../state/Atom'

import {floorState} from '../state/Atom'
import {roomState} from '../state/Atom'
import {speedState} from '../state/Atom'
import {timeStampState} from '../state/Atom'

import {transmitState} from '../state/Atom'

import axios from 'axios'

const Transmit = () => {
  const [transmitToggle, transmitToggleState] = useRecoilState(transmitState)
  const [remainTime, setRemainTime] = useRecoilState(passedTimeState)

  //   useEffect(() => {
  //     setRemainTime(-1)
  //   }, [])

  const floor = useRecoilValue(floorState)
  const room = useRecoilValue(roomState)
  const speed = useRecoilValue(speedState)

  const timeStamp = useRecoilValue(timeStampState)

  const sendingJSON = {
    floorNumber: floor,
    roomNumber: room,
    sessionId: '정의X',
    downloadSpeed: speed,
    timeStamp: timeStamp,
  }

  useEffect(() => {
    axios
      .post('http://localhost:1337/speedtest', sendingJSON)
      .then((res) => {
        console.log('Response Data', res.data)
      })
      .catch((error) => {
        console.error('Error sending message', error)
      })
    transmitToggleState((prev) => !prev)
  }, [])

  return <Fragment></Fragment>
}

export default Transmit
