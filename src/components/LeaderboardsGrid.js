import React from 'react';
import LeaderboardsCell from './LeaderboardsCell'

function LeaderboardsGrid() {
    return (
        <div className="leaderboards-grid">
            <div className="leaderboards-grid-important">
                <LeaderboardsCell cellId={0}></LeaderboardsCell>
                <LeaderboardsCell cellId={1}></LeaderboardsCell>
            </div>
            <div className="leaderboards-grid-default">
                <LeaderboardsCell cellId={2}></LeaderboardsCell>
                <LeaderboardsCell cellId={3}></LeaderboardsCell>
                <LeaderboardsCell cellId={4}></LeaderboardsCell>
                <LeaderboardsCell cellId={5}></LeaderboardsCell>
                <LeaderboardsCell cellId={6}></LeaderboardsCell>
                <LeaderboardsCell cellId={7}></LeaderboardsCell>
            </div>
        </div>
    );
}

export default LeaderboardsGrid;