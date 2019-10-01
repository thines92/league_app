export default (state = {}, action) => {
	if (action.type === "FETCH_SUMMONER") {
		console.log("action.payload: " + JSON.stringify(action.payload));
		return action.payload;
	}
	return state;
};
