import React from "react";
import { connect } from "react-redux";
import { fetchSummoner } from "../actions";

class SummonerSearch extends React.Component {
	state = { summoner: "EnjoyYourBurrito", summonerLevel: "" };
	onFormSubmit = async event => {
		event.preventDefault();
		await this.props.fetchSummoner(this.state.summoner);
		this.setState({ summonerLevel: this.props.summonerLevel.summonerLevel });
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
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("mapStatetoProps state: " + JSON.stringify(state));
	return { summonerLevel: state.summoner.data };
};
export default connect(
	mapStateToProps,
	{
		fetchSummoner
	}
)(SummonerSearch);
