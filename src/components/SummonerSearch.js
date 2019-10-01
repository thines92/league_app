import React from "react";
import { connect } from "react-redux";
import { fetchSummonerData, fetchSummonerRank } from "../actions";

class SummonerSearch extends React.Component {
	state = {
		summoner: "EnjoyYourBurrito",
		summonerData: {},
		summonerLevel: "",
		summonerRank: ""
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
			summonerRank:
				this.props.summonerRank[0].tier + " " + this.props.summonerRank[0].rank
		});
		console.log("state: " + JSON.stringify(this.state));
		console.log("props: " + JSON.stringify(this.props));
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit}>
					<input
						className="ui input"
						value={this.state.summoner}
						onChange={e => this.setState({ summoner: e.target.value })}
					/>
					<button className="ui button" type="submit">
						Search
					</button>
				</form>
				<div>{this.state.summonerLevel}</div>
				<div>{this.state.summonerRank}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("mapStatetoProps state: " + JSON.stringify(state));
	return {
		summonerData: state.summonerData.data,
		summonerRank: state.summonerRank.data
	};
};
export default connect(
	mapStateToProps,
	{
		fetchSummonerData,
		fetchSummonerRank
	}
)(SummonerSearch);
