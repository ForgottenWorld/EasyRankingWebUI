import React from 'react';
import LeaderboardPodium from './LeaderboardPodium';
import { separateThousands } from "../utils/Formatting";


export default function Leaderboard(props) {

    return (
        <div className={`leaderboard color${(props.category.id % 10) + 1} ${props.fading ? "fading" : ""}`}>
            <div className="leaderboard-header">
                <div className="back-button-container"><div className="back-button" onClick={() => props.goBack()}>BACK</div></div>
                <div className="leaderboard-title">{props.category.name}</div>
                <LeaderboardPodium
                    suffix={props.category.suffix}
                    first={props.category.players[0]}
                    firstName={props.players?.[props.category.players?.[0]?.uuid]?.name ?? null}
                    second={props.category.players[1]}
                    secondName={props.players?.[props.category.players?.[1]?.uuid]?.name ?? null}
                    third={props.category.players[2]}
                    thirdName={props.players[props.category.players?.[2]?.uuid]?.name ?? null} />
            </div>
            <div className="leaderboard-list">
                {props.category.players.map((p,i) => 
                    <div key={`lb-${i}`} className="leaderboard-list-item" onClick={() => props.selectPlayer(p.uuid)}>
                        <span className="leaderboard-list-position">{i+1}</span>
                        <span className="leaderboard-list-name">
                            {props.players[p.uuid].name}
                            <img alt="Player face" className="player-face" src={`https://minotar.net/avatar/${p.uuid}/32`} />
                        </span>
                        <span className="leaderboard-list-score">{separateThousands(Math.floor(p.score))} {props.category.suffix}</span>
                    </div>    
                )}
            </div>
        </div>
    );
}