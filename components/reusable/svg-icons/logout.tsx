import React from 'react';

const LogoutIcon = ({ color = '#919191' }: { color?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
			<path d='M7.62415 11.0619V13.9885' stroke={color} strokeWidth='1.3' strokeLinecap='round' />
			<path
				d='M16.5939 9.59851L16.5939 7.78503C16.5939 6.40432 15.4746 5.28503 14.0939 5.28503H10.7054M16.5939 15.7969L16.5939 17.738C16.5939 19.1187 15.4746 20.238 14.0939 20.238H10.7054'
				stroke={color}
				strokeWidth='1.3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.64526 6.45682C2.64526 5.74754 3.0922 5.11524 3.76082 4.87857L8.17889 3.31475C9.26841 2.9291 10.4117 3.73724 10.4117 4.893V20.2459C10.4117 21.3757 9.31551 22.1812 8.23726 21.8436L3.8192 20.4602C3.12071 20.2415 2.64526 19.5944 2.64526 18.8625V6.45682Z'
				stroke={color}
				strokeWidth='1.3'
			/>
			<path d='M13.569 12.6664L21.1025 12.6664' stroke={color} strokeWidth='1.3' strokeLinecap='round' />
			<path
				d='M19.1299 10.2854L21.0357 12.325C21.2152 12.5171 21.2153 12.8155 21.0357 13.0077L19.1299 15.0474'
				stroke={color}
				strokeWidth='1.3'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default LogoutIcon;
