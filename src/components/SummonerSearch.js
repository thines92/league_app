import React from "react";
import { connect } from "react-redux";
import { fetchSummonerData, fetchSummonerRank } from "../actions";
import SummonerRank from "./SummonerRank";

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
				<SummonerRank soloQueueRank={this.state.soloQueueRank} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("mapStatetoProps state: " + JSON.stringify(state));
	return {
		summonerData: state.summonerData,
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
