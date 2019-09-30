import RiotGames from "../api/RiotGames";

export const fetchSummoner = summoner => async dispatch => {
	const response = RiotGames.get(
		`lol/summoner/v4/summoners/by-name/${summoner}`
	);

	dispatch({ type: "FETCH_SUMMONER", payload: response });
};
