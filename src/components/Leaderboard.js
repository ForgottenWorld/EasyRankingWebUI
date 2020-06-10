import React from 'react';

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
                </div>
                <div className="leaderboard-list">
                    {this.props.category.players.map((p,i) => 
                        <div className="leaderboard-list-item">
                            <span className="leaderboard-list-position">{i+1}</span>
                            <span className="leaderboard-list-name">{this.props.players[p.uuid].name}</span>
                            <span className="leaderboard-list-score">{Math.floor(p.score)} {this.props.category.suffix}</span>
                        </div>    
                    )}
                </div>
            </div>
        );
    }
}