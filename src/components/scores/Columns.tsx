import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export type score = {
	name: string;
	nric: string;
	totalScore: number;
};

export const Columns: ColumnDef<score>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "nric",
		header: "NRIC",
	},
	{
		accessorKey: "totalScore",
		header: "Total Score",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const score = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="dark bg-background  text-primary"
					>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
						>
                            Mark TEF
						</DropdownMenuItem>
						<DropdownMenuItem>Mark Exam Paper</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
