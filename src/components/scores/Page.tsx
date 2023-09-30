import { score, Columns } from "./Columns";
import { DataTable } from "./DataTable";
import databaseCadetScores from "../../services/databaseCadetScores"

async function getData(): Promise<score[]> {
	// Fetch data from your API here.
  const userScore = await databaseCadetScores.getCadetScores()
  userScore.map(
    curr=>{
      console.log(curr);
    }
  )

	return [
		{
			name: "test",
			nric: "test",
			totalScore: 20,
		},
		{
			name: "test",
			nric: "test",
			totalScore: 20,
		},
		{
			name: "test",
			nric: "test",
			totalScore: 20,
		},
		// ...
	];
}

export default async function DemoPage() {
	const data = await getData();

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={Columns} data={data} />
		</div>
	);
}
