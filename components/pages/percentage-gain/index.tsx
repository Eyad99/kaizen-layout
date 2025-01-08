'use client';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import { Button } from '@/components/ui/button';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ChevronDown, MoveUp } from 'lucide-react';
import React from 'react';
import { CartesianGrid, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PercentageGain = () => {
	const chartData = [
		{ month: 'January', desktop: 186, mobile: 80 },
		{ month: 'February', desktop: 305, mobile: 200 },
		{ month: 'March', desktop: 237, mobile: 120 },
		{ month: 'April', desktop: 73, mobile: 190 },
		{ month: 'May', desktop: 209, mobile: 130 },
		{ month: 'June', desktop: 214, mobile: 140 },
	];

	const chartConfig = {
		desktop: {
			label: 'Desktop',
			color: 'hsl(var(--chart-1))',
		},
		mobile: {
			label: 'Mobile',
			color: 'hsl(var(--chart-2))',
		},
	} satisfies ChartConfig;
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
			{/* 
			<ChartContainer config={chartConfig}>
				<LineChart
					accessibilityLayer
					data={chartData}
					margin={{
						top: 20,
						// left: 12,
						// right: 12,
					}}
				>
					<CartesianGrid vertical={false} />
					<XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
					<YAxis />

					<ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
					<Line
						dataKey='desktop'
						type='natural'
						stroke='var(--color-desktop)'
						strokeWidth={2}
						dot={{
							fill: 'var(--color-desktop)',
						}}
						activeDot={{
							r: 6,
						}}
					>
						<LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
					</Line>
				</LineChart>
			</ChartContainer> */}
			<ResponsiveContainer width='100%' height={400}>
				<LineChart data={chartData} margin={{ top: 20 }}>
					<defs>
						<linearGradient id='lineGradient' x1='0' y1='0' x2='1' y2='0'>
							<stop offset='21.15%' stopColor='#01F1E3' />
							<stop offset='100.89%' stopColor='#5CF101' />
						</linearGradient>
					</defs>
					<CartesianGrid vertical={false} />
					<XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
					<YAxis />
					<Tooltip cursor={false} />
					<Line
						type='natural'
						dataKey='desktop'
						stroke='url(#lineGradient)'
						// stroke='var(--color-desktop)'
						strokeWidth={2}
						dot={{ fill: 'url(#lineGradient)' }}
						activeDot={{ r: 6 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PercentageGain;
