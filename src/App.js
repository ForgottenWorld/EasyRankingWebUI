import React from 'react';
import './App.css';
import LeaderboardsGrid from './components/LeaderboardsGrid';
import logo from './img/logo.png';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <img src={logo}></img>
      </div>
      <div className="app-body">
        <LeaderboardsGrid></LeaderboardsGrid>
      </div>
    </div>
  );
}

export default App;
