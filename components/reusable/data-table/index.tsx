'use client';
import React, { FC } from 'react';
import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	flexRender,
	createColumnHelper,
	getFilteredRowModel,
} from '@tanstack/react-table';
import { DataTableProps } from '@/core';
import { Table } from '@/components/ui/table';
import DataTableHeader from './data-table-header';
import DataTableBody from './data-table-body';

const DataTable: FC<DataTableProps> = ({ columns, data }) => {
	const columnHelper = createColumnHelper();

	// Map columns from props to column definitions for useReactTable
	const mappedColumns = columns.map((column) => {
		return columnHelper.accessor(column.accessor, {
			id: column.accessor,
			header: () => <p className='text-[16px] font-bold text-lime-green'>{column.header}</p>,
			cell: (info) => {
				const value = info.getValue() as any;
				const formattedValue = column.formatter ? column.formatter(value) : value;
				return <p>{formattedValue}</p>;
			},
		});
	});

	const table = useReactTable({
		data: data,
		columns: mappedColumns as any,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: false,
	});

	return (
		<div>
			{/* - - - - - - - - Table - - - - - - - - */}
			<Table className={' overflow-auto'}>
				<DataTableHeader table={table} />
				<DataTableBody table={table} />
			</Table>
		</div>
	);
};

export default DataTable;
