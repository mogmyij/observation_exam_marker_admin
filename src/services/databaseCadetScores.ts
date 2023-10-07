import axios from "axios";
import { response } from "express";

const baseURL = "http://localhost:3001/api";

//types for when data is recieved from the server
type user = {
	name: string,
	nric: string,
}
//the database will link the user object and userScore object relationally and send
//it to the web app. since we dont need all the key value pairs we declare this type
//to only take note of the important keys we are interested in
type userScoreData ={
	totalScore: number,
	user: user,
}

async function getCadetScores(): Promise<userScoreData[]> {
	try {
		const response = await axios.get(baseURL + "/userScore");
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export default { getCadetScores };