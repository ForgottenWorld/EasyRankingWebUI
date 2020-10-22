import React from 'react';

export default function LeaderboardPodium(props) {

    return (
        <div className="leaderboard-podium">
            <div className="second-place-container">
                <div className="second-place-frame">
                    <img alt="Second Place" className="podium-player-face" src={`https://minotar.net/avatar/${props.second?.uuid ?? 0}/64`} />
                    <div className="podium-score second-place-score"></div>
                </div>
                <div className="podium-name second-place-name">{props.secondName ?? "NOBODY"}</div>
            </div>
            <div className="first-place-container">
                <div className="podium-name first-place-name">{props.firstName ?? "NOBODY"}</div>
                <div className="first-place-frame">
                    <img alt="First Place" className="podium-player-face" src={`https://minotar.net/avatar/${props.first?.uuid ?? 0}/96`} />
                    <div className="podium-score first-place-score"></div>
                </div>
            </div>
            <div className="third-place-container">
                <div className="third-place-frame">
                    <img alt="Third Place" className="podium-player-face" src={`https://minotar.net/avatar/${props.third?.uuid ?? 0}/64`} />
                    <div className="podium-score third-place-score"></div>
                </div>
                <div className="podium-name third-place-name">{props.thirdName ?? "NOBODY"}</div>
            </div>
        </div>
    );
}