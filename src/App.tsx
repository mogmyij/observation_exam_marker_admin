import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { DataTable } from "./components/scores/DataTable";
import DemoPage from "./components/scores/Page";
import { JsxElement } from "typescript";
import { Header } from "./components/ui/Header";

function App() {
	const [table, setTable] = useState<ReactNode | null>(null);

	useEffect(() => {
		async function fetchData() {
			const table = await DemoPage();
			setTable(table);
		}
		fetchData();
	}, []);

	return (
		<div className="App dark bg-background  text-primary h-screen">
			<Header />
			{table}
		</div>
	);
}

export default App;
