export default (state = {}, action) => {
	if (action.type === "FETCH_SUMMONER") {
		return action.payload;
	}
	return state;
};
