export default (state = {}, action) => {
	if (action.type === "FETCH_SUMMONER_RANK") {
		console.log("summonerRank: " + JSON.stringify(action.payload));
		const soloQueue = action.payload.data.filter(
			obj => obj.queueType === "RANKED_SOLO_5x5"
		)[0];
		console.log("soloQueue: " + JSON.stringify(soloQueue));
		return {
			soloQueue: {
				rank: soloQueue.tier + " " + soloQueue.rank,
				wins: soloQueue.wins,
				losses: soloQueue.losses
			}
		};
	}

	return state;
};
