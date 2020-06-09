import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import summonerDataReducer from './summonerDataReducer';
import summonerRankReducer from './summonerRankReducer';

export default combineReducers({
	form: formReducer,
	summonerData: summonerDataReducer,
	summonerRank: summonerRankReducer,
});
