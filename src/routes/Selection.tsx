/* React */
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';

/* MUI */
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem, Grid, createTheme, ThemeProvider } from '@mui/material';

/* Atom */
import { floorState, roomState } from '../state/Atom';

const SelectionTheme = createTheme({
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
        fontFamily: 'Helvetica, sans-serif',
        fontSize: 16,
    }
})

const RoomSplit = ({ floor }: { floor: string }) => {

    const floorArray: string[] = ['1', '2', '3', '4', '5', '6']
    
    const F1_Rooms: string[] =
        ['101', '102', '103', '104', '105',
            '106', '107', '108', '109', '110',
            '111', '112', '113', '114']
    
    const F2_Rooms: string[] =
        ['201', '202', '203', '204', '205',
            '206', '207', '208', '209', '210',
            '211', '212', '213', '214', '215',
            '215-1']
    
    const F3_Rooms: string[] =
        ['301', '302', '303', '304', '305',
            '306', '307', '308', '309', '310',
            '311', '312', '313', '314', '315',
            '316', '317', '318', '319', '320']
    
    const F4_Rooms: string[] =
        ['401', '402', '403', '404', '405',
            '406', '407', '408', '409', '410',
            '411', '412', '413', '414', '415',
            '416']
    
    const F5_Rooms: string[] =
        ['501', '502', '503', '504', '505',
            '506', '507', '508', '509', '510',
            '511', '512', '513', '514', '515',
            '516', '517', '518', '519', '520',
            '521', '522', '523', '524', '525',
            '526', '527', '528', '529', '530',
            '531', '532', '533']
    
    const F6_Rooms: string[] =
        ['601', '602', '603', '604', '605',
            '606', '607', '608', '609', '610',
            '611', '612', '613', '614', '615',
            '616', '617', '618', '619', '620',
            '621', '622', '623', '624', '625',
            '626', '627', '628', '629', '630',
            '631', '632', '633']

    switch (floor) {
        case '1':
            return (<Fragment><Rooms_Alpha floor={'1'} roomsArray={F1_Rooms} /></Fragment>)
        case '2':
            return (<><Rooms_Alpha floor={'2'} roomsArray={F2_Rooms}/></>)
        case '3':
            return (<><Rooms_Alpha floor={'3'} roomsArray={F3_Rooms}/></>)
        case '4':
            return (<><Rooms_Alpha floor={'4'} roomsArray={F4_Rooms}/></>)
        case '5':
            return (<><Rooms_Alpha floor={'5'} roomsArray={F5_Rooms}/></>)
        case '6':
            return (<><Rooms_Alpha floor={'6'} roomsArray={F6_Rooms}/></>)
        default:
            return (<><Rooms_Dfault /></>)
    }
}

const FloorSelection = () => {
    const [floor, setFloor] = useRecoilState(floorState)
    const handleChange = (event: SelectChangeEvent) => {
        setFloor(event.target.value as string);
    };

    let floorArray : string[] = ['1', '2', '3', '4', '5', '6']

    return (
        <ThemeProvider theme={SelectionTheme}>
            <Grid container spacing={1} bgcolor=''>
                <Grid item xs={6} sm={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <FormControl sx={{
                        width: '180px',
                    }} margin='normal'>
                        <InputLabel>Floor</InputLabel>
                        <Select
                            // labelId="Floor-Label"
                            // id="Floor-Id"
                            value={floor}
                            label="Floor"
                            onChange={handleChange}
                        >
                            {floorArray.map((floor) => (
                                <MenuItem key={floor} value={floor}>{floor}층</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    <RoomSplit floor={floor}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

const Rooms_Dfault = () => {
    return (
        <FormControl fullWidth sx={{ width: '180px' }} margin='normal'>
            <InputLabel>Room</InputLabel>
            <Select label="Room">
                <MenuItem>층수를 먼저 선택해 주세요.</MenuItem>
            </Select>
        </FormControl >
    );
}

const Rooms_Alpha = ({ floor, roomsArray } : { floor: string, roomsArray: string[] }) => {
    const [room, setRoom] = useRecoilState(roomState)
    const handleChange = (event: SelectChangeEvent) => {
        console.log(`Rooms_${floor}, HandleChange`)
        setRoom(event.target.value as string);
    };
    
    return (
        <FormControl fullWidth sx={{ width: '180px' }} margin='normal'>
        <InputLabel id={floor}>Room</InputLabel>
        <Select
            id={floor}
            value={room}
            label="Room"
            onChange={handleChange}
            >
            {roomsArray.map((eachRoom) => (
                <MenuItem key={eachRoom} value={eachRoom}>{eachRoom}호</MenuItem>
            ))}
        </Select>
    </FormControl >
    )    
}

export default FloorSelection