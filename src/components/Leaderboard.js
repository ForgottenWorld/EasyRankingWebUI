import React from 'react';
import LeaderboardPodium from './LeaderboardPodium';

const facepholder = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIOGSoThbEL8RJq1CECqFWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLWg+N+vLv3uHsHCNUi06y2UUDTbTMRi4qp9KoYeEUHuhHAJGZkZhlzkhRHy/F1Dx9f7yI8q/W5P0ePmrEY4BOJZ5lh2sQbxFObtsF5nzjE8rJKfE48YtIFiR+5rnj8xjnnssAzQ2YyMU8cIhZzTaw0McubGvEEcVjVdMoXUh6rnLc4a8Uyq9+TvzCY0VeWuU5zEDEsYgkSRCgoo4AibERo1UmxkKD9aAv/gOuXyKWQqwBGjgWUoEF2/eB/8LtbKzs+5iUFo0D7i+N8DAGBXaBWcZzvY8epnQD+Z+BKb/hLVWD6k/RKQwsfAb3bwMV1Q1P2gMsdoP/JkE3Zlfw0hWwWeD+jb0oDfbdA15rXW30fpw9AkrqK3wAHh8BwjrLXW7y7s7m3f8/U+/sBuwJyxEXwF8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBgsHNzXau/MHAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAB9JREFUCNdjYMADDBv15j6fiUxCJdBEDRv16KgDKwAABWk1y5CGZ7gAAAAASUVORK5CYII=";

export default class Leaderboard extends React.Component {

    constructor(props) {
        super(props);

        this.goBack = this.props.goBack.bind(this);
    }

    render() {
        return (
            <div className={`leaderboard color${(this.props.category.id % 8) + 1} ${this.props.fading ? "fading" : ""}`}>
                <div className="leaderboard-header">
                    <div className="back-button-container"><div className="back-button" onClick={() => this.goBack()}>BACK</div></div>
                    <div className="leaderboard-title">{this.props.category.name}</div>
                    <LeaderboardPodium></LeaderboardPodium>
                </div>
                <div className="leaderboard-list">
                    {this.props.category.players.map((p,i) => 
                        <div className="leaderboard-list-item">
                            <span className="leaderboard-list-position">{i+1}</span>
                            <span className="leaderboard-list-name">
                                {this.props.players[p.uuid].name}
                                <img alt="Player face" className="player-face" src={`data:image/jpeg;base64,${facepholder}`} />
                            </span>
                            <span className="leaderboard-list-score">{Math.floor(p.score)} {this.props.category.suffix}</span>
                        </div>    
                    )}
                </div>
            </div>
        );
    }
}