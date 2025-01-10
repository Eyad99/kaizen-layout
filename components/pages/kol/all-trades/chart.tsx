'use client';

import React, { useRef } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, BubbleController, LinearScale, PointElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(BubbleController, LinearScale, PointElement, Tooltip, Legend, Title);

const Chart = () => {
	const chartRef = useRef(null);

	const wordsData = [
		{ word: 'support', frequency: 15 },
		{ word: 'issue', frequency: 12 },
		{ word: 'feedback', frequency: 8 },
		{ word: 'recommend', frequency: 10 },
		{ word: 'thanks', frequency: 18 },
		{ word: 'service', frequency: 14 },
		{ word: 'order', frequency: 9 },
		{ word: 'refund', frequency: 5 },
		{ word: 'delay', frequency: 7 },
		{ word: 'delivery', frequency: 11 },
		{ word: 'product', frequency: 13 },
		{ word: 'response', frequency: 6 },
		{ word: 'quality', frequency: 4 },
		{ word: 'satisfaction', frequency: 9 },
		{ word: 'appreciate', frequency: 8 },
	];

	const data = {
		datasets: wordsData.map((wordData, index) => ({
			label: '',
			data: [
				{
					x: index,
					y: wordData.frequency,
					// r: wordData.frequency * 1.5,
				},
			],
			backgroundColor: `#15FFAB`,
			// backgroundColor: `#16FFAA`,
		})),
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: (context: any) => {
						const { dataset, label, raw } = context;
						return `Word: ${dataset.label}, Frequency: ${raw.y}`;
					},
				},
			},
		},
		scales: {
			x: {
				grid: {
					color: 'transparent',
				},
				ticks: {
					color: 'white',
				},
			},
			y: {
				grid: {
					color: 'rgba(255, 255, 255, 0.1)',
				},
				ticks: {
					color: 'white',
				},
			},
		},
	};
	return (
		<div className='w-full h-[320px]'>
			<Bubble data={data} options={options} ref={chartRef} />{' '}
		</div>
	);
};

export default Chart;
