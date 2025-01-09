'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function Chart() {
	const chartRef = useRef<ChartJS | any>(null);
	const [chartData, setChartData] = useState<any>({
		datasets: [],
	});

	useEffect(() => {
		const chart = chartRef.current;

		if (!chart) {
			return;
		}

		const createGradient = (ctx: CanvasRenderingContext2D) => {
			const gradient = ctx.createLinearGradient(0, 0, 0, 400);
			gradient.addColorStop(0, 'rgba(92, 241, 1, 0)');
			gradient.addColorStop(1, 'rgba(1, 241, 227, 0.3)');
			return gradient;
		};

		// Create border gradient
		const borderGradient = chart.ctx.createLinearGradient(0, 0, 400, 0);
		borderGradient.addColorStop(0, '#01F1E3');
		borderGradient.addColorStop(1, '#5CF101');

		setChartData({
			labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
			datasets: [
				{
					label: '',
					data: [186, 305, 237, 73, 209, 104],
					borderColor: borderGradient,
					backgroundColor: createGradient(chart.ctx),
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointRadius: 0,
				},
			],
		});
	}, []);

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				grid: {
					color: 'rgba(255, 255, 255, 0.1)',
				},
				ticks: {
					color: 'white',
				},
			},
			x: {
				grid: {
					color: 'transparent',
				},
				ticks: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
		<div className='w-full h-[320px]'>
			<Line ref={chartRef} data={chartData} options={options} />
		</div>
	);
}
