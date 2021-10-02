import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import LeaderboardsGrid from './components/LeaderboardsGrid';
import logo from './img/logo.svg';
import Leaderboard from './components/Leaderboard';
import PlayerStats from './components/PlayerStats';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [psFading, setPsFading] = useState(false);
  const [lbFading, setLbFading] = useState(false);
  const [gridFading, setGridFading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let categories = useRef(null);
  let players = useRef(null);

  useEffect(() => {
    fetch('https://rankingapi.forgottenworld.it/api/get/data')
      .then(resp => {
        if (resp.status !== 200) {
          setIsError(true);
          return;
        }  
  
        resp.json()
          .then(data => {
            data.categories.sort((a, b) => {
              if (a.important && !b.important) return -1
              if (b.important && !a.important) return 1
              return data.categories.findIndex(c => c === a) - data.categories.findIndex(c => c === b);
            });
            
            data.categories.forEach((c, i) => c.id = i);
            categories.current = data.categories;
      
            players.current = new Map();
            data.players.forEach(p => {
              p.name = p.name.replace(/§[0-9a-fk-or]§[0-9a-fk-or]#>[0-9a-fk-or] §[0-9a-fk-or]/, "");
              players.current[p.uuid] = p;
            });
            setIsLoading(false);
          },
          () => setIsError(true));
      },
      () => setIsError(true));
  }, []);

  const selectPlayer = uuid => {
    setLbFading(true);
    setTimeout(() => {
      setLbFading(false);
      setSelectedPlayer(uuid);
    }, 200)
  }

  const selectCategory = categoryId => {
    setGridFading(true);
    setTimeout(() => {
      setGridFading(false);
      setSelectedCategory(categoryId);
    }, 200)
  }

  const goBackFromPs = () => {
    if (!selectedPlayer) return;

    setPsFading(true);
    setTimeout(() => {
      setPsFading(false);
      setSelectedPlayer(null);
    }, 200)
  }

  const goBackFromLb = () => {
    if (selectedCategory === null) return;

    setLbFading(true);
    setPsFading(true);
    setTimeout(() => {
      setLbFading(false);
      setPsFading(false);
      setSelectedCategory(null);
      setSelectedPlayer(null);
    }, 200)
  }

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} alt="EasyRanking Logo" className="logo" onClick={() => goBackFromLb()}></img>
      </div>
      <div className="app-body">
        {isError
          ? <div className="error-panel">Couldn't retrieve data from server.</div>
          : isLoading
            ? <div className="loader-container"><div className="loader"></div></div>
            : selectedPlayer
              ? <PlayerStats
                  name={players.current[selectedPlayer].name}
                  uuid={selectedPlayer}
                  fading={psFading}
                  scores={categories.current
                    .filter(c => c.players.map(p => p.uuid).includes(selectedPlayer))
                    .map(c => {
                      return {
                        category: c.name, 
                        score: c.players.find(p => p.uuid === selectedPlayer).score,
                        suffix: c.suffix
                      }
                    })}
                  goBack={goBackFromPs}
                  />
              : selectedCategory !== null
                  ? <Leaderboard
                      players={players.current}
                      category={categories.current[selectedCategory]}
                      fading={lbFading}
                      selectPlayer={selectPlayer}
                      goBack={goBackFromLb} />
                  : <LeaderboardsGrid
                      players={players.current}
                      categories={categories.current}
                      fading={gridFading}
                      selectCategory={selectCategory} />
          }
      </div>
      <div className="app-footer"></div>
    </div>
  );
}

export default App;
