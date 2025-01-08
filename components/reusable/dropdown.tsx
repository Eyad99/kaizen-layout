'use client';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
} from '../ui/dropdown-menu';
import React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
type Checked = DropdownMenuCheckboxItemProps['checked'];

const Dropdown = () => {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex items-center gap-2 cursor-pointer text-rgba-dropdown-menu text-sm'>
					<p>Remove top 10% calls</p>
					<ChevronDown />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
					Status Bar
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Dropdown;
