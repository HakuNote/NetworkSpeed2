import {atom, selector, useRecoilState} from 'recoil'
import {Fragment} from 'react'

/* Atom */

export const floorState = atom({
  key: 'floorState',
  default: '',
})

export const roomState = atom({
  key: 'roomState',
  default: '',
})

export const speedState = atom({
  key: 'speedState',
  default: '',
})

export const timeStampState = atom({
  key: 'timeStampState',
  default: '',
})

export const submitToggleState = atom({
  key: 'submitToggleState',
  default: true,
})

export const passedTimeState = atom({
  key: 'passedTimeState',
  default: 7,
})

export const transmitState = atom({
  key: 'transmitState',
  default: false,
})

/* Selector */

// export const speedAverageSelector = selector({
//   key: 'speedAverageSelector',
//   get: ({get}) => {
//     const speeds = get(speedState)
//     let total = 0
//     speeds.map((val, ind) => {
//       total += val
//     })
//     console.log('total : ', total)

//     return total
//   },
// })

const Atom = () => {
  const [floor, setFloor] = useRecoilState(floorState)
  const [room, setRoom] = useRecoilState(roomState)

  return <Fragment>Atom</Fragment>
}

export default Atom
