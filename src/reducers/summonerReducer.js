export default (state = {}, action) => {
	console.log("reducer summoner: " + JSON.stringify(state));
	state.summoner = action.payload;
	return state;
};
