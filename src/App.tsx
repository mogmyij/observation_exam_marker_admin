import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { DataTable } from "./components/scores/DataTable";
import DemoPage from "./components/scores/Page";

function App() {
	const [data, setData] = useState<ReactNode | null>(null);

	useEffect(() => {
		async function fetchData() {
			const test = await DemoPage();
			setData(test);
		}

		fetchData();
	}, []);

	return (
		<div className="App">
			<body className="dark bg-background  text-primary h-screen">
        {data}
      </body>
		</div>
	);
}

export default App;
