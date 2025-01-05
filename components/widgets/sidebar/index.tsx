'use client';

import * as React from 'react';
import Image from 'next/image';
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavMain } from './nav-main';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<div className='aspect-square size-8 items-center justify-center'>
					<Image src={'/images/svg/Megaphone.svg'} width={40} height={40} alt='brandImage' />
				</div>
			</SidebarHeader>

			<SidebarContent>
				<NavMain />
			</SidebarContent>

			<SidebarRail />
		</Sidebar>
	);
}
