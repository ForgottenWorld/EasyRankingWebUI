import React from 'react';
import LeaderboardsCell from './LeaderboardsCell'

class LeaderboardsGrid extends React.Component {
    constructor(props) {
        super(props);

        this.selectCategory = this.props.selectCategory.bind(this);
    }

    render() {
        return (
            <div className={`leaderboards-grid ${this.props.fading ? "fading" : ""}`}>
                <div className="leaderboards-grid-important">
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={0}></LeaderboardsCell>
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={1}></LeaderboardsCell>
                </div>
                <div className="leaderboards-grid-default">
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={2}></LeaderboardsCell>
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={3}></LeaderboardsCell>
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={4}></LeaderboardsCell>
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={5}></LeaderboardsCell>
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={6}></LeaderboardsCell>
                    <LeaderboardsCell selectCategory={this.selectCategory} cellId={7}></LeaderboardsCell>
                </div>
            </div>
        );
    }
}

export default LeaderboardsGrid;