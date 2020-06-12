import React from 'react';
import './App.css';
import LeaderboardsGrid from './components/LeaderboardsGrid';
import logo from './img/logo.png';
import Leaderboard from './components/Leaderboard';
import PlayerStats from './components/PlayerStats';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null,
      selectedPlayer: null,

      psFading: false,
      lbFading: false,
      gridFading: false,

      isLoading: true,
      isError: false
    }

    this.goBackFromPs = this.goBackFromPs.bind(this);
    this.goBackFromLb = this.goBackFromLb.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectPlayer = this.selectPlayer.bind(this);

    this.leaderboardGrid = React.createRef();
    this.leaderboard = React.createRef();
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://easyranking.chillstudio.it/get/data');
    xhr.responseType = 'text/json';
    xhr.send();
    xhr.onload = () => {
      if (xhr.status !== 200) {
        this.setState({
          isError: true
        })
      } else {
        const data = JSON.parse(xhr.response);

        data.categories.sort((a, b) => {
          if (a.important && !b.important) return -1
          else if (b.important && !a.important) return 1
          else {
            return data.categories.findIndex(c => c === a) - data.categories.findIndex(c => c === b);
          }
        });
        data.categories.forEach((c, i) => c.id = i);
        this.categories = data.categories;

        this.players = new Map();
        data.players.forEach(p => this.players[p.uuid] = p)

        this.setState({
          isLoading: false
        })
      }
    };
    xhr.onerror = () => {
      this.setState({
        isError: true
      })
    };
  }

  selectPlayer(uuid) {
    this.setState({lbFading: true});
    setTimeout(() => {
      this.setState({lbFading: false})
      this.setState({selectedPlayer: uuid});
    }, 200)
  }

  selectCategory(categoryId) {
    this.setState({gridFading: true});
    setTimeout(() => {
      this.setState({gridFading: false})
      this.setState({selectedCategory: categoryId});
    }, 200)
  }

  goBackFromPs() {
    if (this.state.selectedPlayer == null) return;

    this.setState({psFading: true});
    setTimeout(() => {
      this.setState({psFading: false})
      this.setState({selectedPlayer: null});
    }, 200)
  }

  goBackFromLb() {
    if (this.state.selectedCategory == null) return;

    this.setState({lbFading: true, psFading: true});
    setTimeout(() => {
      this.setState({lbFading: false, psFading: false})
      this.setState({selectedCategory: null, selectedPlayer: null});
    }, 200)
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} alt="EasyRanking Logo" className="logo" onClick={() => this.goBackFromLb()}></img>
        </div>
        <div className="app-body">
          {this.state.isError
            ? <div className="error-panel">Couldn't retrieve data from server.</div>
            : this.state.isLoading
              ? <div className="loader-container"><div className="loader"></div></div>
              : this.state.selectedPlayer != null
                ? <PlayerStats
                    name={this.players[this.state.selectedPlayer].name}
                    uuid={this.state.selectedPlayer}
                    fading={this.state.psFading}
                    scores={this.categories.filter(c => 
                      c.players.map(p => p.uuid).includes(this.state.selectedPlayer)).map(c => {
                        return {
                          category: c.name, 
                          score: c.players.find(p => p.uuid === this.state.selectedPlayer).score,
                          suffix: c.suffix
                        }
                      })}
                    goBack={this.goBackFromPs}
                    />
                : this.state.selectedCategory != null
                    ? <Leaderboard
                        players={this.players}
                        category={this.categories[this.state.selectedCategory]}
                        fading={this.state.lbFading}
                        selectPlayer={this.selectPlayer}
                        goBack={this.goBackFromLb} />
                    : <LeaderboardsGrid
                        players={this.players}
                        categories={this.categories}
                        fading={this.state.gridFading}
                        ref={this.refs.leaderboardGrid}
                        selectCategory={this.selectCategory} />
            }
        </div>
        <div className="app-footer"></div>
      </div>
    );
  }
}

export default App;
