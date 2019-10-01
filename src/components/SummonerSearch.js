import React from "react";
import { connect } from "react-redux";
import { fetchSummonerData, fetchSummonerRank } from "../actions";

class SummonerSearch extends React.Component {
	state = {
		summoner: "EnjoyYourBurrito",
		summonerData: {},
		summonerLevel: "",
		soloQueueRank: {
			soloQueue: {
				rank: "",
				LP: null,
				wins: null,
				losses: null
			}
		}
	};
	onFormSubmit = async event => {
		event.preventDefault();
		await this.props.fetchSummonerData(this.state.summoner);
		this.setState({
			summonerLevel: this.props.summonerData.summonerLevel,
			summonerId: this.props.summonerData.id
		});
		await this.props.fetchSummonerRank(this.state.summonerId);
		this.setState({
			soloQueueRank: this.props.soloQueueRank
		});
		console.log("state: " + JSON.stringify(this.state));
		console.log("props: " + JSON.stringify(this.props));
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="inline fields">
						<input
							className="ui input"
							value={this.state.summoner}
							onChange={e => this.setState({ summoner: e.target.value })}
						/>
						<button className="ui button" type="submit">
							Search
						</button>
					</div>
				</form>
				<div className="ui label">
					Level: <div className="detail">{this.state.summonerLevel}</div>
				</div>
				<div className="ui segment">
					<div className="ui label">
						Solo Queue:
						<div className="ui label">
							Rank:{" "}
							<div className="detail">
								{this.state.soloQueueRank.soloQueue.rank}
							</div>
						</div>
						<div className="ui label">
							LP:{" "}
							<div className="detail">
								{this.state.soloQueueRank.soloQueue.LP}
							</div>
						</div>
						<div className="ui label">
							Wins:{" "}
							<div className="detail">
								{this.state.soloQueueRank.soloQueue.wins}
							</div>
						</div>
						<div className="ui label">
							Losses:{" "}
							<div className="detail">
								{this.state.soloQueueRank.soloQueue.losses}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("mapStatetoProps state: " + JSON.stringify(state));
	return {
		summonerData: state.summonerData.data,
		soloQueueRank: state.summonerRank
	};
};
export default connect(
	mapStateToProps,
	{
		fetchSummonerData,
		fetchSummonerRank
	}
)(SummonerSearch);
