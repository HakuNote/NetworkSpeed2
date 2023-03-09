import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Mui from './routes/Mui'
import Main from './routes/Main'
import Selection from './routes/Selection'
import ConnectionSpeed from './routes/ConnectionSpeed.jsx'

import RunAxios from './RunAxios'

import Atom from './state/Atom'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/atm'>
          <Atom />
        </Route>
        <Route path='/grd'>
          <ConnectionSpeed />
        </Route>
        <Route path='/sel'>
          <Selection />
        </Route>
        <Route path='/main'>
          <>
            <Main />
          </>
        </Route>
        <Route path='/mui'>
          <Mui />
        </Route>
        <Route path='/AXS'>
          <RunAxios />
        </Route>
        <Route path='/MAP'>
          <Map />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
