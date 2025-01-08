import { TableBody, TableRow, TableCell } from '@/components/ui/table';
import { flexRender } from '@tanstack/react-table';
import { table } from 'console';
import React from 'react';

const DataTableBody = ({ table }: { table: any }) => {
	return (
		<TableBody>
			{table.getRowModel().rows?.length == 0 ? (
				<TableRow key={`emptyRow`}>
					<TableCell
						key={'1'}
						colSpan={table.getHeaderGroups()?.map((el: any) => el.headers?.length)[0]}
						className='w-full border-white/0 py-3 pr-4  text-center'
					>
						No Data
					</TableCell>
				</TableRow>
			) : (
				table.getRowModel().rows.map((row: any) => {
					return (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell: any) => {
								return (
									<TableCell key={cell.id} className={`min-w-[150px] border-white/0 py-3 pr-4 ${''}`}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								);
							})}
						</TableRow>
					);
				})
			)}
		</TableBody>
	);
};

export default DataTableBody;
