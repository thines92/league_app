import axios from "axios";

export default axios.create({
	baseURL: "https://na1.api.riotgames.com",
	headers: {
		Origin: "https://developer.riotgames.com",
		"Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
		"X-Riot-Token": "RGAPI-656e2cc6-361c-49bb-8a11-b4858c856d50",
		"Accept-Language": "en-US,en;q=0.9",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
	}
});
