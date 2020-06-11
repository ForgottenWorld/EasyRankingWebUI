import React from 'react';

export default class LeaderboardPodium extends React.Component {

    render() {
        return (
            <div className="leaderboard-podium">
                <div className="second-place-container">
                    <div className="second-place-frame">
                        <img alt="Second Place" className="podium-player-face" src={`https://minotar.net/avatar/${this.props.second?.uuid ?? 0}/64`} />
                        <div className="podium-score second-place-score">{this.props.second?.score ?? 0}</div>
                    </div>
                    <div className="podium-name second-place-name">{this.props.secondName ?? "NOBODY"}</div>
                </div>
                <div className="first-place-container">
                    <div className="podium-name first-place-name">{this.props.firstName ?? "NOBODY"}</div>
                    <div className="first-place-frame">
                        <img alt="First Place" className="podium-player-face" src={`https://minotar.net/avatar/${this.props.first?.uuid ?? 0}/96`} />
                        <div className="podium-score first-place-score">{this.props.first?.score ?? 0}</div>
                    </div>
                </div>
                <div className="third-place-container">
                    <div className="third-place-frame">
                        <img alt="Third Place" className="podium-player-face" src={`https://minotar.net/avatar/${this.props.third?.uuid ?? 0}/64`} />
                        <div className="podium-score third-place-score">{this.props.third?.score ?? 0}</div>
                    </div>
                    <div className="podium-name third-place-name">{this.props.thirdName ?? "NOBODY"}</div>
                </div>
            </div>
        );
    }
}