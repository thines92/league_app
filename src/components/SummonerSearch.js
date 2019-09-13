import React from "react";

class SummonerSearch extends React.Component {
	state = { summoner: "EnjoyYourBurrito" };
	onFormSubmit = async event => {
		event.preventDefault();
		this.props.onSubmit(this.state.summoner);
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
export default SummonerSearch;
