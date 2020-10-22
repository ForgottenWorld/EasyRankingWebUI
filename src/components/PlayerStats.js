import React from 'react';
import { separateThousands } from "../utils/Formatting";

export default function PlayerStats(props) {

    return (
        <div className={`playerstats ${props.fading ? "fading" : ""}`}>
            <div className="playerstats-header">
                <div className="back-button-container"><div className="back-button" onClick={() => props.goBack()}>BACK</div></div>
                <div className="playerstats-title">{props.name}</div>
            </div>
            <div className="playerstats-top-panel">
                <div className="playerstats-skin-container">
                    <img alt="Player's skin" className="playerstats-skin" src={`https://minotar.net/armor/body/${props.uuid}/100.png`}></img>
                </div>
                <div className="playerstats-list">
                {props.scores.map((s, i) => 
                    <div key={`ps-${i}`} className="playerstats-list-item">
                        <span className="playerstats-list-name">
                            {s.category}
                        </span>
                        <span className="playerstats-list-score">{separateThousands(Math.floor(s.score))} {s.suffix}</span>
                    </div>    
                )}
                </div>
        </div>
        </div>
    );
}