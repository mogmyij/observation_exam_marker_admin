import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { DataTable } from "./components/scores/DataTable";
import DemoPage from "./components/scores/Page";
import { JsxElement } from "typescript";
import { Header } from "./components/ui/Header";

function App() {
	const [tableData, setTableData] = useState<ReactNode | null>(null);

	useEffect(() => {
		async function fetchData() {
			const table = await DemoPage();
			setTableData(table);
		}
		fetchData();
	}, []);

	return (
		<div className="App dark bg-background  text-primary min-h-screen">
			<Header />
			{tableData}
		</div>
	);
}

export default App;
