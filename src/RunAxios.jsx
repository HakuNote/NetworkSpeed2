import axios from 'axios'
import {useEffect, useState} from 'react'

import {TextField, List, ListItem, Button, ListItemText} from '@mui/material'

import {useRecoilState} from 'recoil'
import {floorState, roomState, speedState} from './state/Atom'

const RunAxios = () => {
  const [floor, setFloor] = useRecoilState(floorState)
  const [room, setRoom] = useRecoilState(roomState)
  const [speed, setSpeed] = useRecoilState(speedState)

  const makeSendingJson = () => {
    return {
      floor: floor,
      room: room,
      speed: speed,
    }
  }

  const onClickPost = () => {
    let newData = makeSendingJson()

    axios
      .post('http://localhost:3000/speedtest/Create', newData)
      .then((response) => {
        console.log('Response Data', response.data)
      })
      .catch((error) => {
        console.error('Error sending message', error)
      })
  }

  return (
    <>
      {/* <Button variant='contained' onClick={onClickGet}>
        데이터 가져오기
      </Button>
      <br />
      <br /> */}
      <br />
      <Button onClick={onClickPost} variant='contained'>
        JSON POST
      </Button>
    </>
  )
}

export default RunAxios
