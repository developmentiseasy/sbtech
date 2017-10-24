import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import SportsPage from './pages/sports/SportsPage'
import CasinoPage from './pages/casino/CasinoPage'
import MegaMoolahPage from './pages/games/mega-moolah/MegaMoolahPage'
import BlackPearlPage from './pages/games/black-pearl/BlackPearlPage'
import SuperSlotsAttackPage from './pages/games/super-slots-attack/SuperSlotsAttackPage'


export const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/home" />)} />

    <Route path="/home" component={HomePage} />

    <Route path="/sports" component={SportsPage} />

    <Route path="/casino" component={CasinoPage} />

    <Route path="/games/mega-moolah" component={MegaMoolahPage} />
    <Route path="/games/the-curse-of-the-black-pearl" component={BlackPearlPage} />
    <Route path="/games/super-slots-attack" component={SuperSlotsAttackPage} />
  </Switch>
)