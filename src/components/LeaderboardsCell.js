import React from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

class LeaderboardsCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            translucent: false
        }

        this.selectCategory = this.props.selectCategory.bind(this);
    }

    render() {
        return (
            <ReactVisibilitySensor onChange={(isVisible) => this.setState({translucent: isVisible})}>
                <div 
                    onClick={() => this.selectCategory(this.props.category.id)}
                    className={`leaderboards-cell ${this.state.translucent ? "" : "translucent"}`}>
                    {this.props.category.name}
                    <div className="leaderboards-cell-list">
                        <div className="leaderboards-top3">
                            {this.props.category.players.slice(0, 3).map((p, i) =>
                                <div key={"top3-" + i}><span className="leaderboards-top3-player-name">{this.props.players[p.uuid].name}</span>
                                <span className="lb-score">{Math.floor(p.score)} {this.props.category.suffix}</span></div>
                            )}
                        </div>
                    </div>
                </div>
            </ReactVisibilitySensor>
        )
    }
}

export default LeaderboardsCell;