import { score, Columns } from "./Columns"
import { DataTable } from "./DataTable"

async function getData(): Promise<score[]> {
  // Fetch data from your API here.
  return [
    {
        name: "test",
        nric: "test",
        totalScore: 20,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={Columns} data={data} />
    </div>
  )
}
