import RiotGames from "../api/RiotGames";

export const fetchSummonerData = summoner => async dispatch => {
	const response = await RiotGames.get(
		`lol/summoner/v4/summoners/by-name/${summoner}`
	);

	dispatch({ type: "FETCH_SUMMONER", payload: response });
};

export const fetchSummonerRank = summonerId => async dispatch => {
	console.log("summonerId: " + summonerId);
	const response = await RiotGames.get(
		`/lol/league/v4/entries/by-summoner/${summonerId}`
	);

	dispatch({ type: "FETCH_SUMMONER_RANK", payload: response });
};
