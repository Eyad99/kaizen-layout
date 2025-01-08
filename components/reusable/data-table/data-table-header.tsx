import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { flexRender } from '@tanstack/react-table';
import React from 'react';

const DataTableHeader = ({ table }: { table: any }) => {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup: any) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header: any) => {
						return (
							<TableHead
								key={header.id}
								colSpan={header.colSpan}
								onClick={header.column.getToggleSortingHandler()}
								className='cursor-pointer border-b-[1px] border-transparent pb-2 text-start'
							>
								<div className='flex items-center gap-2 text-xs !text-lime-green'>
									{header?.id !== 'actions' && (
										<span className='text-lime-green font-bold'>
											{header.column.getIsSorted() ? (
												header.column.getIsSorted() === 'asc' ? (
													<span>↑</span>
												) : (
													<span>↓</span>
												)
											) : (
												<span>⇅</span>
											)}
										</span>
									)}
									{flexRender(header.column.columnDef.header, header.getContext())}
								</div>
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
};

export default DataTableHeader;
