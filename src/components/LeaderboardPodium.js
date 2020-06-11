import React from 'react';

const facepholder = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIOGSoThbEL8RJq1CECqFWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLWg+N+vLv3uHsHCNUi06y2UUDTbTMRi4qp9KoYeEUHuhHAJGZkZhlzkhRHy/F1Dx9f7yI8q/W5P0ePmrEY4BOJZ5lh2sQbxFObtsF5nzjE8rJKfE48YtIFiR+5rnj8xjnnssAzQ2YyMU8cIhZzTaw0McubGvEEcVjVdMoXUh6rnLc4a8Uyq9+TvzCY0VeWuU5zEDEsYgkSRCgoo4AibERo1UmxkKD9aAv/gOuXyKWQqwBGjgWUoEF2/eB/8LtbKzs+5iUFo0D7i+N8DAGBXaBWcZzvY8epnQD+Z+BKb/hLVWD6k/RKQwsfAb3bwMV1Q1P2gMsdoP/JkE3Zlfw0hWwWeD+jb0oDfbdA15rXW30fpw9AkrqK3wAHh8BwjrLXW7y7s7m3f8/U+/sBuwJyxEXwF8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBgsHNzXau/MHAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAB9JREFUCNdjYMADDBv15j6fiUxCJdBEDRv16KgDKwAABWk1y5CGZ7gAAAAASUVORK5CYII=";

export default class LeaderboardPodium extends React.Component {

    render() {
        return (
            <div className="leaderboard-podium">
                <div className="second-place-container">
                    <div className="second-place-frame">
                        <img alt="Second Place" className="podium-player-face" src={`data:image/jpeg;base64,${facepholder}`} />
                    </div>
                </div>
                <div className="first-place-container">
                    <div className="first-place-frame">
                        <img alt="First Place" className="podium-player-face" src={`data:image/jpeg;base64,${facepholder}`} />
                    </div>
                </div>
                <div className="third-place-container">
                    <div className="third-place-frame">
                        <img alt="Third Place" className="podium-player-face" src={`data:image/jpeg;base64,${facepholder}`} />
                    </div>
                </div>
            </div>
        );
    }
}