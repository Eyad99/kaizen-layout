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
import { ChevronRight, LogOut, Settings } from 'lucide-react';
import { sidebarTabs } from './tabs';
import Link from 'next/link';

export function NavMain() {
	return (
		<div>
			<SidebarGroup>
				<SidebarGroupLabel>Menu</SidebarGroupLabel>
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
								<SidebarMenuButton tooltip={item.title}>
									{item.icon && <item.icon />}
									<Link href={item.url} passHref>
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						)
					)}
				</SidebarMenu>
			</SidebarGroup>
			<SidebarGroup>
				<SidebarGroupLabel>Support</SidebarGroupLabel>
				<SidebarMenu>
					<SidebarMenuItem key={'Setting'}>
						<SidebarMenuButton tooltip={'Setting'}>
							<Settings />
							<Link href={'/setting'} passHref>
								<span>Setting</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem key={'Logout'}>
						<SidebarMenuButton tooltip={'Logout'}>
							<LogOut />
							<span>Logout</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroup>
		</div>
	);
}
