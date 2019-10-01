import React from "react";
import { connect } from "react-redux";
import { fetchSummoner } from "../actions";

class SummonerSearch extends React.Component {
	state = { summoner: "EnjoyYourBurrito" };
	onFormSubmit = event => {
		event.preventDefault();
		this.props.fetchSummoner(this.state.summoner);
		console.log(this.props);
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
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("mapStateToProps " + JSON.stringify(state));
	return { summoner: state.summoner };
};
export default connect(
	mapStateToProps,
	{
		fetchSummoner
	}
)(SummonerSearch);
