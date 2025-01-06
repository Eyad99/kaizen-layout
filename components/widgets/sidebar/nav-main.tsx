'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarGroupLabel,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarGroup,
	SidebarMenu,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import { sidebarTabs } from './tabs';
import { usePathname } from 'next/navigation';
import SettingIcon from '@/components/reusable/svg-icons/setting';
import LogoutIcon from '@/components/reusable/svg-icons/logout';
import Link from 'next/link';

export function NavMain() {
	const pathname = usePathname();

	return (
		<div>
			<p className='text-[#aaa] text-center font-[400] text-[10px] md:block hidden'>Menu</p>
			<SidebarGroup>
				<SidebarGroupLabel className='visible md:hidden'>Menu</SidebarGroupLabel>
				<SidebarMenu>
					{sidebarTabs.map((item: any) =>
						item?.collapse ? (
							<Collapsible key={item.title} asChild defaultOpen={item.isActive} className='group/collapsible'>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton tooltip={item.title}>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
											<ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.items?.map((subItem: any) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton asChild>
														<Link href={subItem.url} passHref>
															<span>{subItem.title}</span>
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						) : (
							<SidebarMenuItem key={item.title}>
								<Link href={item.url} passHref>
									<SidebarMenuButton
										tooltip={item.title}
										isActive={pathname === item.url}
										className={pathname === item.url ? 'data-[active=true]:bg-gradient  hover:bg-gradient' : ''}
									>
										{item.icon && <item.icon />}
										<span>{item.title}</span>
									</SidebarMenuButton>
								</Link>
							</SidebarMenuItem>
						)
					)}
				</SidebarMenu>
			</SidebarGroup>
			<p className='text-[#aaa] text-center font-[400] text-[10px] md:block hidden'>Support</p>
			<SidebarGroup>
				<SidebarGroupLabel className='visible md:hidden'>Support</SidebarGroupLabel>
				<SidebarMenu>
					<SidebarMenuItem key={'Setting'}>
						<Link href={'/setting'} passHref>
							<SidebarMenuButton
								tooltip={'Setting'}
								isActive={pathname === '/setting'}
								className={pathname === '/setting' ? 'data-[active=true]:bg-gradient  hover:bg-gradient' : ''}
							>
								<SettingIcon />
								<span>Setting</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem key={'Logout'}>
						<SidebarMenuButton tooltip={'Logout'}>
							<LogoutIcon />
							<span>Logout</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroup>
		</div>
	);
}
