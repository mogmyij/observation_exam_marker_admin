import { score, Columns } from "./Columns";
import { DataTable } from "./DataTable";
import databaseCadetScores from "../../services/databaseCadetScores";

async function getData(): Promise<score[]> {
	// Fetch data from your API here.
	const userScore = await databaseCadetScores.getCadetScores();
	// create score array that will be returned
	var userDataTable:score[]=[];
	// map each userScore object into a score object and add it to the array
	userScore.map(curr=>{
		const databaseScores:score = {
			name: curr.user.name,
			nric: curr.user.nric,
			totalScore: curr.totalScore,
		}
		userDataTable.push(databaseScores)
	})

	return userDataTable
}

export default async function DemoPage() {
	const data = await getData();

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={Columns} data={data} />
		</div>
	);
}
