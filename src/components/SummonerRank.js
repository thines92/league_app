import React from "react";

class SummonerRank extends React.Component {
	render() {
		return (
			<div className="ui segment">
				<div className="ui label">
					Solo Queue:
					<div className="ui label">
						Rank:{" "}
						<div className="detail">
							{this.props.soloQueueRank.soloQueue.rank}
						</div>
					</div>
					<div className="ui label">
						LP:{" "}
						<div className="detail">
							{this.props.soloQueueRank.soloQueue.LP}
						</div>
					</div>
					<div className="ui label">
						Wins:{" "}
						<div className="detail">
							{this.props.soloQueueRank.soloQueue.wins}
						</div>
					</div>
					<div className="ui label">
						Losses:{" "}
						<div className="detail">
							{this.props.soloQueueRank.soloQueue.losses}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SummonerRank;
