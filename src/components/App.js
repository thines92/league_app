import React from "react";
import SummonerSearch from "./SummonerSearch";

class App extends React.Component {
	state = { summonerData: "" };

	render() {
		return (
			<div className="ui container">
				<SummonerSearch onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
