import { combineReducers } from "redux";
import summonerReducer from "./summonerReducer";

export default combineReducers({
	summoner: summonerReducer
});
