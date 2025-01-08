import React from 'react';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import Dropdown from '@/components/reusable/dropdown';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const PerformanceMatrics = ({ data }: { data: any }) => {
	function divideIntoGroups() {
		const groups = [];
		for (let i = 0; i < Object.entries(data.Xs).length; i += 5) {
			groups.push(Object.entries(data.Xs).slice(i, i + 5));
		}
		return groups;
	}
	const groups = divideIntoGroups();
	const groupedObjects = groups.map((group) => Object.fromEntries(group));

	return (
		<div>
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between'>
					<h1 className='text-2xl font-bold'>Performance Matrics</h1>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<Dropdown />
							<Switch />
						</div>
						<Button
							variant='outline'
							size='icon'
							className='rounded-full bg-lime-green-light hover:bg-lime-green-light border-none h-8 w-8 '
						>
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
						<h4 className='text-lime-green text-[28px] font-bold'>100</h4>
					</div>

					<div className='flex flex-col'>
						<p className='text-[#D0D0DA] font-bold'>Win Rate</p>
						<h4 className='text-lime-green text-[28px] font-bold'>73%</h4>
						<span className='text-merengo'>73 wins / 27 Loses</span>
					</div>

					<div className='flex flex-col justify-center items-center'>
						<p className='text-[#D0D0DA] font-bold'>From (X'S)</p>
						<div className='flex gap-2'>
							<div className='flex items-center justify-center w-8 h-8 rounded-full !border-none bg-gradient'>1</div>
							<div className='flex items-center justify-center w-8 h-8 rounded-full !border-none bg-gradient'>2</div>
							<div className='flex items-center justify-center w-8 h-8 rounded-full !border-none bg-gradient-red'>3</div>
							<div className='flex items-center justify-center w-8 h-8 rounded-full !border-none bg-gradient'>4</div>
							<div className='flex items-center justify-center w-8 h-8 rounded-full !border-none bg-gradient'>5</div>
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
							{groupedObjects?.map((item, index) => {
								return (
									<div key={index} className='flex gap-6 w-full'>
										<div className='flex items-center gap-1 w-full'>
											<span className='text-xs'>3x</span>
											<Progress value={33} />
											<span className='text-xs'>100</span>
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
		</div>
	);
};

export default PerformanceMatrics;
