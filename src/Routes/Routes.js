import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import SolarMissions from '../Pages/SolarMissions';
import SolarSystem from '../Pages/SolarSystem';

export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/menu" component={ Menu } />
      <Route path="/Missions" component={ SolarMissions } />
      <Route path="/SolarSystem" component={ SolarSystem } />
    </Switch>
  );
}
