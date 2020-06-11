import React from 'react';
import './App.css';
import LeaderboardsGrid from './components/LeaderboardsGrid';
import logo from './img/logo.png';
import Leaderboard from './components/Leaderboard';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null,
      lbFading: false,
      gridFading: false,
      isLoading: true,
      isError: false
    }

    this.goBack = this.goBack.bind(this)
    this.selectCategory = this.selectCategory.bind(this)

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

  selectCategory(categoryId) {
    this.setState({gridFading: true});
    setTimeout(() => {
      this.setState({gridFading: false})
      this.setState({selectedCategory: categoryId});
    }, 200)
  }

  goBack() {
    if (this.state.selectedCategory == null) return;

    this.setState({lbFading: true});
    setTimeout(() => {
      this.setState({lbFading: false})
      this.setState({selectedCategory: null});
    }, 200)
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} alt="EasyRanking Logo" className="logo" onClick={() => this.goBack()}></img>
        </div>
        <div className="app-body">
          {this.state.isError
            ? <div className="error-panel">Couldn't retrieve data from server.</div>
            : this.state.isLoading
              ? <div className="loader-container"><div className="loader"></div></div>
              : this.state.selectedCategory != null
                  ? <Leaderboard
                      players={this.players}
                      category={this.categories[this.state.selectedCategory]}
                      fading={this.state.lbFading}
                      goBack={this.goBack}/>
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
