import axios from 'axios';

export default axios.create({
	baseURL: 'https://na1.api.riotgames.com',
	headers: {
		'User-Agent':
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
		'Accept-Language': 'en-US,en;q=0.9',
		'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Origin': 'https://developer.riotgames.com',
		'X-Riot-Token': 'RGAPI-d9d32d2d-84b5-41c2-b1bf-87794fb321c6',
	},
});
