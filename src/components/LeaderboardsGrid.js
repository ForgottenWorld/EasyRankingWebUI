import React from 'react';
import LeaderboardsCell from './LeaderboardsCell'

export default class LeaderboardsGrid extends React.Component {
    
    constructor(props) {
        super(props);

        this.selectCategory = this.props.selectCategory.bind(this);
    }

    render() {
        const needsAlignment = this.props.categories.length === 6;

        return (
            <div className={`leaderboards-grid ${this.props.fading ? "fading" : ""}`}>
                <div className="leaderboards-grid-important">
                    <LeaderboardsCell
                        selectCategory={this.selectCategory}
                        category={this.props.categories[0]}
                        players={this.props.players} />
                    <LeaderboardsCell
                        selectCategory={this.selectCategory}
                        category={this.props.categories[1]}
                        players={this.props.players} />
                </div>
                <div className={`leaderboards-grid-default ${needsAlignment ? "realigned" : null}`}>
                    {this.props.categories.slice(2).map(c =>
                        <LeaderboardsCell
                            key={"lbc" + c.id} 
                            selectCategory={this.selectCategory}
                            category={c}
                            players={this.props.players} />
                    )}
                </div>
            </div>
        );
    }
}