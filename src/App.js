import React from 'react';
import './App.css';
import LeaderboardsGrid from './components/LeaderboardsGrid';
import logo from './img/logo.png';
import Leaderboard from './components/Leaderboard';

let erData;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://easyranking.chillstudio.it/get/data');
xhr.responseType = 'text/json';
xhr.send();
xhr.onload = () => {
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    erData = JSON.parse(xhr.response);
    alert(xhr.response);
  }
};
xhr.onerror = function() {
  alert("Request failed");
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null,
      lbFading: false,
      gridFading: false
    }

    this.goBack = this.goBack.bind(this)
    this.selectCategory = this.selectCategory.bind(this)

    this.leaderboardGrid = React.createRef();
    this.leaderboard = React.createRef();
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
          <img src={logo} onClick={() => this.goBack()}></img>
        </div>
        <div className="app-body">
          {this.state.selectedCategory != null
            ? <Leaderboard
                fading={this.state.lbFading}
                rankings={["TIZIO", "CAIO", "SEMPRONIO"]}
                goBack={this.goBack}/>
            : <LeaderboardsGrid 
                fading={this.state.gridFading}
                ref={this.refs.leaderboardGrid}
                selectCategory={this.selectCategory} />
          }
        </div>
      </div>
    );
  }
  
}

export default App;
