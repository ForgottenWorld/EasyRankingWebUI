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
                    onClick={() => this.selectCategory(this.props.cellId)}
                    className={`leaderboards-cell ${this.state.translucent ? "" : "translucent"}`}>
                    TEST
                    <div className="leaderboards-cell-list">
                        <div className="leaderboards-top3">
                            <div>TIZIO<span className="lb-score">123456</span></div>
                            <div>CAIO<span className="lb-score">123456</span></div>
                            <div>SEMPRONIO<span className="lb-score">123456</span></div>
                        </div>
                    </div>
                </div>
            </ReactVisibilitySensor>
        )
    }
}

export default LeaderboardsCell;