import ChartBarIcon from '@/components/reusable/svg-icons/chart-bar';
import ChartPieSliceIcon from '@/components/reusable/svg-icons/chart-pie-slice';
import DatabaseIcon from '@/components/reusable/svg-icons/database';
import MegaPhoneIcon from '@/components/reusable/svg-icons/mega-phone';
import ProjectScreenChartIcon from '@/components/reusable/svg-icons/project-screen-chart';
import ScalesIcon from '@/components/reusable/svg-icons/scales';
import SquareFourIcon from '@/components/reusable/svg-icons/square-four';
// import SquaresFour from '/public/images/Megaphone.svg'

export const sidebarTabs = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: SquareFourIcon,
		isActive: true,
	},
	{
		title: 'Chart Slice',
		url: '/',
		icon: ChartPieSliceIcon,
	},
	{
		title: 'Chart Bar',
		url: '/chart-bar',
		icon: ChartBarIcon,
	},
	{
		title: 'DB',
		url: '/db',
		icon: DatabaseIcon,
	},
	{
		title: 'Screen Chart',
		url: '/screen-chart',
		icon: ProjectScreenChartIcon,
	},
	{
		title: 'Scales',
		url: '/scales',
		icon: ScalesIcon,
	},
	{
		title: 'MegaPhone',
		url: '/megaphone',
		icon: MegaPhoneIcon,
	},
];

// {
// 	title: 'Playground',
// 	url: '#',
// 	icon: SquareTerminal,
// 	isActive: true,
// 	collapse: true,
// 	items: [
// 		{
// 			title: 'History',
// 			url: '/',
// 		},
// 	],
// },
