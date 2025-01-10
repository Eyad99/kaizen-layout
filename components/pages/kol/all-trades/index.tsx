import React from 'react';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Chart from './chart';

const AllTrades = () => {
	return (
		<div className='flex flex-col'>
			<h1 className='text-[16px] text-lime-green font-bold'>All Trades: Duration - Profitability</h1>
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between'>
					<h2 className='text-2xl font-bold text-white'>Duration/ x’s</h2>
					<div className='flex items-center gap-4'>
						<Button variant={'lightLime'} className='w-[37px] h-[37px] text-[10px]'>
							<EllipsisVertical />
						</Button>
						<Button variant={'lightLime'} className='w-32 text-[10px]'>
							Export
						</Button>
					</div>
				</div>

				<Chart />
			</div>
		</div>
	);
};

export default AllTrades;
