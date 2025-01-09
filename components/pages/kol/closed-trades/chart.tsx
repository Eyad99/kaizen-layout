'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function Chart() {
	const chartRef = useRef<ChartJS | any>(null);
	const [gradientBorder, setGradientBorder] = useState<string | CanvasGradient>('');

	useEffect(() => {
		const chart = chartRef.current;
		if (!chart) return;

		// Create border gradient
		const borderGradient = chart.ctx.createLinearGradient(0, 0, chart.ctx.canvas.width, 0);
		borderGradient.addColorStop(0, '#01F1E3');
		borderGradient.addColorStop(1, '#5CF101');
		setGradientBorder(borderGradient);
	}, []);

	const chartData = {
		labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
		datasets: [
			{
				label: 'Profit',
				data: [186, 305, 237, 73, 209, 104],
				borderColor: gradientBorder,
				borderWidth: 3,
				fill: true,
				tension: 0.4,
				pointRadius: 0,
				shadowColor: '#1DC77A',
				shadowBlue: 30,
			},

			{
				label: '',
				data: [286, 305, 337, 173, 209, 304],
				borderColor: 'rgba(35, 203, 235, 0.20)',
				borderWidth: 3,
				fill: true,
				tension: 0.4,
				pointRadius: 0,
				shadowColor: '#0AC5EF',
				shadowBlue: 30,
			},
		],
	};

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
					color: 'white',
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
			customShadow: {
				enabled: true,
			},
		},
	};

	// Define custom plugin to add shadow
	const shadowPlugin = {
		id: 'customShadow',
		beforeDatasetsDraw(chart: any) {
			const ctx = chart.ctx;
			chart.data.datasets.forEach((dataset: any, index: number) => {
				const meta = chart.getDatasetMeta(index);
				if (!meta.hidden && dataset.borderColor) {
					// Apply shadow only for the visible lines
					ctx.save();
					ctx.shadowColor = dataset.shadowColor; // Shadow color
					ctx.shadowBlur = dataset.shadowBlue; // Shadow blur radius
					ctx.shadowOffsetX = 6; // Shadow horizontal offset
					ctx.shadowOffsetY = 12; // Shadow vertical offset
					ctx.strokeStyle = dataset.borderColor; // Set the gradient
					ctx.lineWidth = dataset.borderWidth;
					ctx.beginPath();
					meta.dataset.draw(ctx); // Draw the line with shadow
					ctx.restore();
				}
			});
		},
	};

	ChartJS.register(shadowPlugin);

	return (
		<div className='w-full h-[320px]'>
			<Line ref={chartRef} data={chartData} options={options} />
		</div>
	);
}
