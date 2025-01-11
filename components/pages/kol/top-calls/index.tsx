import React from 'react';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import Chart from './chart';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const TopCalls = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex justify-between'>
				<h1 className='text-2xl font-bold'>Title Here</h1>
				<div className='flex items-center gap-4'>
					<Button variant={'lightLime'} className='w-32 text-[10px]'>
						Add Filter
					</Button>
					<Button variant='outline' size='icon' className='rounded-full bg-lime-green-light hover:bg-lime-green-light border-none h-8 w-8 '>
						<SettingIcon color='#77FF60' />
					</Button>
				</div>
			</div>

			<div className='flex gap-6'>
				<Tabs defaultValue='trader'>
					<TabsList className='border-none'>
						<TabsTrigger
							value='trader'
							className='data-[state=active]:bg-transparent text-merengo data-[state=active]:text-white data-[state=active]:shadow-none'
						>
							Top Calls
						</TabsTrigger>
						<Separator orientation='vertical' className='bg-merengo h-[10px]' />
						<TabsTrigger
							value='buy-data'
							className='data-[state=active]:bg-transparent text-merengo data-[state=active]:text-white data-[state=active]:shadow-none'
						>
							Recent
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs defaultValue='trader'>
					<TabsList className='border-none'>
						<TabsTrigger
							value='trader'
							className='data-[state=active]:bg-transparent text-merengo data-[state=active]:text-white data-[state=active]:shadow-none'
						>
							ATH x's
						</TabsTrigger>
						<Separator orientation='vertical' className='bg-merengo h-[10px]' />
						<TabsTrigger
							value='buy-data'
							className='data-[state=active]:bg-transparent text-merengo data-[state=active]:text-white data-[state=active]:shadow-none'
						>
							Current x's
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<Chart />
		</div>
	);
};

export default TopCalls;
