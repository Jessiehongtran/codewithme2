import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './nav/nav.jsx';
import Games from './games/games.jsx';
import WebApps from './webs/webApps';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route
         exact path="/games"
         component= {Games}
      />
      <Route
         exact path="/webapps"
         component= {WebApps}
      />
    </div>
  );
}

export default App;
