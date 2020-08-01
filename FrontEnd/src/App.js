import React from 'react';

import GameList from "./components/GameList";
import CurrentGame from "./components/CurrentGame";

import './App.css';

function App() {
  return (
    <div className="App">

      <GameList />
      <CurrentGame />

    </div>
  );
}

export default App;
