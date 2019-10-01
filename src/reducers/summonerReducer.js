export default (summonerData = "", action) => {
	console.log(action);
	return {
		summoner: action.payload
	};
};
