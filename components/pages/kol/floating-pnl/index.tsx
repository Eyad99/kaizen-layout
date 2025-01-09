import React from 'react';
import Dropdown from '@/components/reusable/dropdown';
import Chart from './chart';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingPnl = () => {
	return (
		<div className='flex flex-col'>
			<h1 className='text-[16px] text-lime-green font-bold'>Floating Pnl</h1>
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between'>
					<Dropdown className='text-2xl font-bold text-white' />
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

export default FloatingPnl;
