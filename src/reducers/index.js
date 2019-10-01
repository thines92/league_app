import { combineReducers } from "redux";
import summonerDataReducer from "./summonerDataReducer";
import summonerRankReducer from "./summonerRankReducer";

export default combineReducers({
	summonerData: summonerDataReducer,
	summonerRank: summonerRankReducer
});
