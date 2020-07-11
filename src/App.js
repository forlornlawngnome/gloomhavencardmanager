import React, {createContext} from 'react';
import { DBConfig } from './DBConfig';
import { IndexedDB, initDB } from 'react-indexed-db';
import {GameView, Home, Setup} from './views';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

initDB(DBConfig);

function App() {
  return (
    <div className="App">
      <IndexedDB
      name={DBConfig.name}
      version={DBConfig.version}
      objectStoresMeta={DBConfig.objectStoresMeta}>

        <Router>
          <div className="top-bar" id="main-menu">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Gloomhaven Card Manager</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/setup">Start Game</Link></li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li>Login/Logout</li>
              </ul>
            </div>
          </div>
          <div className="grid-container fluid">
            <Switch>
              <Route path="/play">
                <GameView />
              </Route>
              <Route path="/setup">
                <Setup />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </IndexedDB>
    </div>
  );
}

export default App;
