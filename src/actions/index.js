import RiotGames from "../api/RiotGames";

export const fetchSummoner = summoner => async dispatch => {
	console.log("summoner: " + summoner);
	const response = await RiotGames.get(
		`lol/summoner/v4/summoners/by-name/${summoner}`
	);
	console.log(response);

	dispatch({ type: "FETCH_SUMMONER", payload: response });
};
