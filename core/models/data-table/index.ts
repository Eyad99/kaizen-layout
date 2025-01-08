export interface DataTableProps {
	data?: any;
	columns: { header: string; accessor: string; formatter?: any }[];
}
