'use client';
import React from 'react';
import Chart from './chart';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import { Button } from '@/components/ui/button';

const PercentageGain = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex justify-between'>
				<h1 className='text-2xl font-bold'>Kol Percentage Gain</h1>
				<div className='flex items-center gap-4'>
					<span>ATH x’s</span>
					<Button variant='outline' size='icon' className='rounded-full bg-lime-green-light hover:bg-lime-green-light border-none h-8 w-8 '>
						<SettingIcon color='#77FF60' />
					</Button>
				</div>
			</div>

			<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-full'>
				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Weekly</p>
					<div className='flex items-start gap-2'>
						<h4 className='text-[28px] font-bold'>+2x</h4>
						<div className='text-[#15FFAB] flex items-center text-xs font-bold pt-2 relative'>
							<span>↑</span>
							<span>19.6%</span>
						</div>
					</div>
					<span className='text-merengo'>40% last week</span>
				</div>

				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Monthly</p>
					<div className='flex items-start gap-2'>
						<h4 className='text-[28px] font-bold'>+5x</h4>
						<div className='text-[#15FFAB] flex items-center text-xs font-bold pt-2 relative'>
							<span>↑</span>
							<span>19.6%</span>
						</div>
					</div>
					<span className='text-merengo'>120% last month</span>
				</div>

				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Yearly</p>
					<div className='flex items-start gap-2'>
						<h4 className='text-[28px] font-bold'>+16x</h4>
						<div className='text-[#15FFAB] flex items-center text-xs font-bold pt-2 relative'>
							<span>↑</span>
							<span>19.6%</span>
						</div>
					</div>
					<span className='text-merengo'>900% last year</span>
				</div>
			</div>

			<Chart />
		</div>
	);
};

export default PercentageGain;
