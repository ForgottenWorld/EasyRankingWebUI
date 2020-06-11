import React from 'react';
import LeaderboardPodium from './LeaderboardPodium';

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
                    <LeaderboardPodium
                        suffix={this.props.category.suffix}
                        first={this.props.category.players[0]}
                        second={this.props.category.players[1]}
                        third={this.props.category.players[2]} />
                </div>
                <div className="leaderboard-list">
                    {this.props.category.players.map((p,i) => 
                        <div className="leaderboard-list-item">
                            <span className="leaderboard-list-position">{i+1}</span>
                            <span className="leaderboard-list-name">
                                {this.props.players[p.uuid].name}
                                <img alt="Player face" className="player-face" src={`https://minotar.net/avatar/${p.uuid}/32`} />
                            </span>
                            <span className="leaderboard-list-score">{Math.floor(p.score)} {this.props.category.suffix}</span>
                        </div>    
                    )}
                </div>
            </div>
        );
    }
}