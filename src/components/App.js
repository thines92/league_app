import React from 'react';
import SummonerSearch from './summoner/SummonerSearch';

class App extends React.Component {
	state = { summonerData: '' };

	render() {
		return (
			<div className="ui container">
				<SummonerSearch />
			</div>
		);
	}
}

export default App;
