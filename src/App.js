import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Register from './components/Register.js';
import Login from './components/Login.js';
import Farmers from './components/Farmers.js';

function App() {
  return (
    <div className="App">
      <Register />
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path={'/farmers'} component={Farmers} />
      </Switch>
    </div>
  );
}

export default App;
