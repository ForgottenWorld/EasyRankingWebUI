import React from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

class LeaderboardsCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translucent: false
        }
    }

    render() {
        return (
            <ReactVisibilitySensor onChange={(isVisible) => this.setState({translucent: isVisible})}>
            { (isVisible) =>
            <div className={`leaderboards-cell ${this.state.translucent ? "" : "translucent"}`}>
                TEST
                <div className="leaderboards-cell-list">
                    <div class="leaderboards-top3">
                        <div>TIZIO<span class="lb-score">123456</span></div>
                        <div>CAIO<span class="lb-score">123456</span></div>
                        <div>SEMPRONIO<span class="lb-score">123456</span></div>
                    </div>
                </div>
            </div>
            }
            </ReactVisibilitySensor>
        )
    }
}

export default LeaderboardsCell;