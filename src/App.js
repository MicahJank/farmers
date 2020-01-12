import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Register from './components/Register.js';

function App() {
  return (
    <div className="App">
      <Register />
      <Switch>
        <Route path={'/login'} />
        <Route path={'/farmers'} />
      </Switch>
    </div>
  );
}

export default App;
