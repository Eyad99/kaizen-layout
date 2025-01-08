'use client';

import React from 'react';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import DataTable from '@/components/reusable/data-table';
import Dropdown from '@/components/reusable/dropdown';
import { DataTableProps } from '@/core';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const StrategyBuilder = ({ data }: { data: any }) => {
	const tableProps: DataTableProps = {
		data: data.recentSignals,

		columns: [
			{ header: 'Token', accessor: `tokenName`, formatter: (value: string) => <span className='text-lime-green'>{value}</span> },
			{ header: 'Market Cap', accessor: `mcap` },
			{ header: 'ATH MC(X)', accessor: `ath` },
			// { header: 'Current MC(X)', accessor: `tokenName` },
			// { header: 'TP1', accessor: `tokenName` },
			// { header: 'TP2', accessor: `tokenName` },
			// { header: 'TP3', accessor: `tokenName` },
			// { header: 'SL', accessor: `tokenName` },
			// { header: 'Pnl', accessor: `tokenName` },
			// { header: 'Updates', accessor: `tokenName` },
			// { header: 'Pnl from recall', accessor: `tokenName` },
		],
	};
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between'>
				<h1 className='text-2xl font-bold'>Strategy Builder</h1>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<Dropdown />
						<Switch />
					</div>
					<Button variant='outline' size='icon' className='rounded-full bg-lime-green-light hover:bg-lime-green-light border-none h-8 w-8 '>
						<SettingIcon color='#77FF60' />
					</Button>
				</div>
			</div>

			<div className='flex items-center justify-end gap-2'>
				<Button variant={'lightLime'} className='w-32 text-[10px]'>
					Last x Calls
				</Button>
				<Button variant={'lightLime'} className='w-32 text-[10px]'>
					Export Data
				</Button>

				<Button variant={'lightLime'} className='w-32 text-[10px]'>
					Add to strategy list
				</Button>
			</div>

			<div>
				<DataTable {...tableProps} />
			</div>
		</div>
	);
};

export default StrategyBuilder;
