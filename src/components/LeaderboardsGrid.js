import React from 'react';
import LeaderboardsCell from './LeaderboardsCell'

export default function LeaderboardsGrid(props) {
    const needsAlignment = props.categories.length === 6;

    return (
        <div className={`leaderboards-grid ${props.fading ? "fading" : ""}`}>
            <div className="leaderboards-grid-important">
                <LeaderboardsCell
                    selectCategory={props.selectCategory}
                    category={props.categories[0]}
                    players={props.players} />
                <LeaderboardsCell
                    selectCategory={props.selectCategory}
                    category={props.categories[1]}
                    players={props.players} />
            </div>
            <div className={`leaderboards-grid-default ${needsAlignment ? "realigned" : null}`}>
                {props.categories.slice(2).map(c =>
                    <LeaderboardsCell
                        key={"lbc" + c.id} 
                        selectCategory={props.selectCategory}
                        category={c}
                        players={props.players} />
                )}
            </div>
        </div>
    );
}