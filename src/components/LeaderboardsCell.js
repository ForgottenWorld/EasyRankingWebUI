import React, { useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { separateThousands } from "../utils/Formatting";

export default function LeaderboardsCell(props) {
    const [translucent, setTranslucent] = useState(false);

    return (
        <ReactVisibilitySensor onChange={isVisible => setTranslucent(isVisible)}>
            <div 
                onClick={() => props.selectCategory(props.category.id)}
                className={`leaderboards-cell ${translucent ? "" : "translucent"}`}>
                {props.category.name}
                <div className="leaderboards-cell-list">
                    <div className="leaderboards-top3">
                        {props.category.players.slice(0, 3).map((p, i) =>
                            <div key={"top3-" + i}>
                                <span className="leaderboards-top3-player-name">
                                    {props.players[p.uuid].name}
                                    <img alt="Player face" className="player-face" src={`https://minotar.net/avatar/${p.uuid}/24`} />
                                </span>
                                <span className="lb-score">
                                    {separateThousands(Math.floor(p.score))} {props.category.suffix}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ReactVisibilitySensor>
    );
}