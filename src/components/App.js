import React from "react";
import RiotGames from "../api/RiotGames";
import SummonerSearch from "./SummonerSearch";

class App extends React.Component {
	state = { summonerData: "" };

	onSearchSubmit = async event => {
		const apiKey = "RGAPI-32b2a033-8b6f-4db0-bc34-a235aeaaeb39";
		const response = await RiotGames.get(
			`lol/summoner/v4/summoners/by-name/${this.state.summoner}`,
			{
				params: {
					api_key: apiKey
				}
			}
		);
		this.setState({ summonerData: response.data });
		console.log(this.state.summonerData);
	};

	render() {
		return (
			<div className="ui container">
				<SummonerSearch onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
