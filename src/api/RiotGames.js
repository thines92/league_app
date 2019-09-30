import axios from "axios";

export default axios.create({
	baseURL: "https://na1.api.riotgames.com",
	headers: {
		Origin: "https://developer.riotgames.com",
		"Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
		"X-Riot-Token": "RGAPI-32b2a033-8b6f-4db0-bc34-a235aeaaeb39",
		"Accept-Language": "en-US,en;q=0.9",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
	},
	params: {
		api_key: "RGAPI-32b2a033-8b6f-4db0-bc34-a235aeaaeb39"
	}
});
