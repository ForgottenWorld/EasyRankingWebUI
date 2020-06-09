import React from 'react';

export default class Leaderboard extends React.Component {

    constructor(props) {
        super(props);

        this.goBack = this.props.goBack.bind(this);
    }

    render() {
        return (
            <div className={`leaderboard ${this.props.fading ? "fading" : ""}`}>
                <div className="leaderboard-header">
                    <div className="back-button" onClick={() => this.goBack()} >GO BACK</div>
                    <div className="leaderboard-title">TEST</div>
                </div>
                <div className="leaderboard-list">
                    {this.props.rankings.map(p => <div>{p}</div>)}
                </div>
            </div>
        );
    }
}