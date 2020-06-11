import React from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

const facepholder = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIOGSoThbEL8RJq1CECqFWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLWg+N+vLv3uHsHCNUi06y2UUDTbTMRi4qp9KoYeEUHuhHAJGZkZhlzkhRHy/F1Dx9f7yI8q/W5P0ePmrEY4BOJZ5lh2sQbxFObtsF5nzjE8rJKfE48YtIFiR+5rnj8xjnnssAzQ2YyMU8cIhZzTaw0McubGvEEcVjVdMoXUh6rnLc4a8Uyq9+TvzCY0VeWuU5zEDEsYgkSRCgoo4AibERo1UmxkKD9aAv/gOuXyKWQqwBGjgWUoEF2/eB/8LtbKzs+5iUFo0D7i+N8DAGBXaBWcZzvY8epnQD+Z+BKb/hLVWD6k/RKQwsfAb3bwMV1Q1P2gMsdoP/JkE3Zlfw0hWwWeD+jb0oDfbdA15rXW30fpw9AkrqK3wAHh8BwjrLXW7y7s7m3f8/U+/sBuwJyxEXwF8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBgsHNzXau/MHAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAB9JREFUCNdjYMADDBv15j6fiUxCJdBEDRv16KgDKwAABWk1y5CGZ7gAAAAASUVORK5CYII=";

export default class LeaderboardsCell extends React.Component {

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
                                <div key={"top3-" + i}>
                                    <span className="leaderboards-top3-player-name">
                                        {this.props.players[p.uuid].name}
                                        <img alt="Player face" className="player-face" src={`data:image/jpeg;base64,${facepholder}`} />
                                    </span>
                                    <span className="lb-score">
                                        {Math.floor(p.score)} {this.props.category.suffix}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ReactVisibilitySensor>
        )
    }
}