import { Separator } from "./separator";

export function Header() {
	return (
		<div>
			<h2 className="pt-4 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
			    Observation Level 1 Admin Page
			</h2>
			<Separator orientation="horizontal" />
		</div>
	);
}
