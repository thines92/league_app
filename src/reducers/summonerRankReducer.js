export default (state = {}, action) => {
	if (action.type === "FETCH_SUMMONER_RANK") {
		return action.payload;
	}

	return state;
};
