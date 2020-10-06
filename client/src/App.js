import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './nav/nav.jsx';
import Games from './games/games.jsx';
import WebApps from './webs/webApps.jsx';
import Arts from './arts/arts.jsx';
import About from './about/about.jsx';
import QA from './Q&A/Q&A.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route
         exact path="/"
         component= {Games}
      />
      <Route
         exact path="/webapps"
         component= {WebApps}
      />
      <Route
         exact path="/arts"
         component= {Arts}
      />
      <Route
         exact path="/about"
         component= {About}
      />
      <Route
         exact path="/qna"
         component= {QA}
      />
    </div>
  );
}

export default App;
