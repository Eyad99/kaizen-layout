import React from 'react';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import Dropdown from '@/components/reusable/dropdown';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { KolDetails_Res, RecentSignal } from '@/core';

const PerformanceMatrics = ({ data }: { data: KolDetails_Res }) => {
	function transformData(obj: Record<string, string>) {
		const entries = Object.entries(obj);
		const firstGroup = entries.slice(0, 5).map(([key, value]) => ({
			key,
			value: parseInt(value, 10),
		}));
		const secondGroup = entries.slice(5).map(([key, value]) => ({
			key,
			value: parseInt(value, 10),
		}));

		return [firstGroup, secondGroup];
	}

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between'>
				<h1 className='text-2xl font-bold'>Performance Matrics</h1>
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

			<div className='flex items-center gap-6'>
				<div className='flex items-center gap-2'>
					<h4>ATH x's</h4>
					<Separator orientation='vertical' className='text-merengo h-3' />
					<h4 className='text-merengo'>Current x's</h4>
				</div>
				<div className='flex items-center gap-2'>
					<Button variant={'lightLime'} className='w-32 text-[10px]'>
						Last x Calls
					</Button>
					<Button variant={'lightLime'} className='w-32 text-[10px]'>
						Export Data
					</Button>
				</div>
			</div>

			<div className='flex items-start justify-between'>
				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Number of calls</p>
					<h4 className='text-lime-green text-[28px] font-bold'>{data.allCalls}</h4>
				</div>

				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Win Rate</p>
					<h4 className='text-lime-green text-[28px] font-bold'>{(data.winRate * 100).toFixed(2)}%</h4>
					<span className='text-merengo'>
						{+data.winCalls} wins / {+data.allCalls - +data.winCalls} Loses
					</span>
				</div>

				<div className='flex flex-col justify-center items-center'>
					<p className='text-[#D0D0DA] font-bold'>From (X'S)</p>
					<div className='flex gap-2'>
						{data.recentSignals?.map((item: RecentSignal) => (
							<div
								key={item.id}
								className={cn(
									'flex items-center justify-center w-8 h-8 rounded-full !border-none',
									Math.round(+item?.athCallXs) == 0 ? 'bg-gradient-red' : 'bg-gradient'
								)}
							>
								{Math.round(+item?.athCallXs)}
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Still Above call price</p>
					<h4 className='text-lime-green text-[28px] font-bold'>8 calls</h4>
				</div>

				<div className='flex flex-col'>
					<p className='text-[#D0D0DA] font-bold'>Top Win Streak</p>
					<h4 className='text-lime-green text-[28px] font-bold'>6</h4>
					<span className='text-merengo'>In the last month</span>
				</div>
			</div>

			<div className='flex flex-col'>
				<div className='flex justify-between items-center py-3'>
					<h4 className='text-2xl font-bold text-gradient'>X’S DATA</h4>
					<div className='flex flex-col items-center'>
						<h4 className='text-[#D0D0DA] font-bold'>Average X</h4>
						<p className='text-[28px] font-bold'>x167</p>
					</div>
				</div>

				<div className='flex justify-between gap-6'>
					<div className='flex w-[85%] gap-6'>
						{transformData(data.Xs)?.map((item, index) => {
							return (
								<div key={index} className='flex gap-6 w-full'>
									<div key={index} className='flex flex-col gap-4 w-full'>
										{item.map(({ key, value }) => (
											<div className='flex items-center gap-1 w-full'>
												<span className='text-xs w-8'>{key}</span>
												<Progress value={value} />
												<span className='text-xs'>{data.allCalls}</span>
											</div>
										))}
									</div>
									<Separator orientation='vertical' className='bg-lime-green h-auto' />
								</div>
							);
						})}
					</div>

					<div className='flex flex-col gap-2 w-[15%]'>
						{Array.from({ length: 2 }).map((_, inddex, array) => (
							<div className='flex flex-col w-full' key={inddex}>
								<div className='flex justify-between w-full'>
									<h4 className='text-[#D0D0DA] text-sm'>Median</h4>
									<span className='text-lime-green font-bold'>7X</span>
								</div>
								{array.length - 1 !== inddex && <Separator />}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='flex flex-col'>
				<div className='flex justify-between items-center py-3'>
					<h4 className='text-2xl font-bold text-gradient-2'>Opportunity Score </h4>
				</div>

				<div className='grid md:grid-cols-4 grid-cols-2 gap-20 w-full'>
					{Array.from({ length: 4 }).map((_, index, array) => (
						<div className='flex gap-20' key={index}>
							<div className='flex flex-col gap-2 w-full'>
								{Array.from({ length: 4 }).map((_, index, arr) => (
									<div key={index} className='flex flex-col w-full'>
										<div className='flex justify-between w-full'>
											<h4 className='text-[#D0D0DA] text-sm'>Median</h4>
											<span className='text-lime-green font-bold'>7X</span>
										</div>
										{arr.length - 1 !== index && <Separator />}
									</div>
								))}
							</div>
							{array.length - 1 !== index && <Separator orientation='vertical' className='bg-lime-green h-auto' />}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PerformanceMatrics;
