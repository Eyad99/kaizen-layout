import React from 'react';
import PerformanceMatrics from '@/components/pages/kol/performance-matrics';
import StrategyBuilder from '@/components/pages/kol/strategy-builder';
import PercentageGain from '@/components/pages/kol/percentage-gain';
import ClosedTrades from '@/components/pages/kol/closed-trades';
import FloatingPnl from '@/components/pages/kol/floating-pnl';
import AllTrades from '@/components/pages/kol/all-trades';
import TopCalls from '@/components/pages/kol/top-calls';
import { kolApi } from '@/core';

const Kol = async () => {
	const kolDetailsData = await kolApi.kolDetails('2344144810');

	return (
		<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
			<div className='grid auto-rows-min gap-4 md:grid-cols-2 grid-cols-1'>
				<div className='rounded-xl bg-secondary py-4 px-6'>
					<PercentageGain />
				</div>
				<div className='rounded-xl bg-secondary py-4 px-6'>
					<TopCalls />
				</div>
			</div>

			<div className='grid auto-rows-min'>
				<div className='rounded-xl bg-secondary py-4 px-6'>
					<PerformanceMatrics data={kolDetailsData.data} />
				</div>
			</div>

			<div className='grid auto-rows-min'>
				<div className='rounded-xl bg-secondary py-4 px-6'>
					<StrategyBuilder data={kolDetailsData.data} />
				</div>
			</div>

			<div className='flex gap-4'>
				<div className='flex flex-col gap-4 w-full md:w-1/2'>
					<div className='rounded-xl bg-secondary py-4 px-6'>
						<ClosedTrades />
					</div>
					<div className='rounded-xl bg-secondary py-4 px-6'>
						<FloatingPnl />
					</div>
					<div className='rounded-xl bg-secondary py-4 px-6'>
						<AllTrades />
					</div>
				</div>
				<div className='flex flex-col gap-4 w-full md:w-1/2'>
					<div className='rounded-xl bg-secondary py-4 px-6'>Chhart 2a</div>
					<div className='rounded-xl bg-secondary py-4 px-6'>Chhart 2b</div>
					<div className='rounded-xl bg-secondary py-4 px-6'>Chhart 2c</div>
				</div>
			</div>
			{/* <div className='grid auto-rows-min gap-4 md:grid-cols-2 grid-cols-1'>
				<div className='rounded-xl bg-secondary py-4 px-6'>Chhart 1</div>
				<div className='rounded-xl bg-secondary py-4 px-6'>
					<div>
						<span>Chhart 2</span>
					</div>
					<span>Chhart 2</span>
				</div>
				<div className='rounded-xl bg-secondary py-4 px-6'>Chhart 3</div>
				<div className='rounded-xl bg-secondary py-4 px-6'>Chhart 4</div>
			</div> */}
		</div>
	);
};

export default Kol;
