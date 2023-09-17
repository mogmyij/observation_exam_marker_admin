import { ColumnDef } from "@tanstack/react-table"

export type score = {
    name: string,
    nric: string,
    totalScore: number,
}

export const Columns: ColumnDef<score>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "nric",
        header: "NRIC"
    },
    {
        accessorKey: "totalScore",
        header: "Total Score"
    },
]