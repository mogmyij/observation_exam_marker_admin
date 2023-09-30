import axios from "axios";
import { response } from "express";

const baseURL = "http://localhost:3001/api";

async function getCadetScores(): Promise<object[]> {
	try {
		const response = await axios.get(baseURL + "/userScore");
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export default { getCadetScores };