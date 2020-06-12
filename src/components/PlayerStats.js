import React from 'react';

export default class PlayerStats extends React.Component {

    constructor(props) {
        super(props);

        this.goBack = this.props.goBack.bind(this);
    }

    render() {
        return (
            <div className={`playerstats ${this.props.fading ? "fading" : ""}`}>
                <div className="playerstats-header">
                    <div className="back-button-container"><div className="back-button" onClick={() => this.goBack()}>BACK</div></div>
                    <div className="playerstats-title">{this.props.name}</div>
                </div>
                <div className="playerstats-top-panel">
                    <div className="playerstats-skin-container">
                        <img alt="Player's skin" className="playerstats-skin" src={`https://minotar.net/armor/body/${this.props.uuid}/100.png`}></img>
                    </div>
                    <div className="playerstats-list">
                    {this.props.scores.map((s, i) => 
                        <div key={`ps-${i}`} className="playerstats-list-item">
                            <span className="playerstats-list-name">
                                {s.category}
                            </span>
                            <span className="playerstats-list-score">{Math.floor(s.score)} {s.suffix}</span>
                        </div>    
                    )}
                    </div>
            </div>
            </div>
        );
    }
}