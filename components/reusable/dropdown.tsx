'use client';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
} from '../ui/dropdown-menu';
import React, { FC } from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
type Checked = DropdownMenuCheckboxItemProps['checked'];

interface DropdownProps {
	className?: string;
	sizeIcon?: string;
}
const Dropdown: FC<DropdownProps> = ({ className, sizeIcon }) => {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className={cn('flex items-center gap-2 cursor-pointer text-rgba-dropdown-menu text-sm', className)}>
					<p>Remove top 10% calls</p>
					<ChevronDown size={sizeIcon} />
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
