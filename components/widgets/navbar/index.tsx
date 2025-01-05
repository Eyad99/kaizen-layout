import React from 'react';
import NavIcon from '@/components/reusable/svg-icons/nav-icon';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, SearchIcon } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
	return (
		<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16'>
			<div className='flex items-center justify-between gap-2 px-4 w-full'>
				{/* <SidebarTrigger className='-ml-1' /> */}
				<div className='flex gap-2 items-center'>
					<ChevronLeft size={'24px'} className='cursor-pointer text-lime-green' />
					<div className='cursor-pointer'>
						<NavIcon />
					</div>

					<h1 className='bg-text-gradient bg-clip-text text-transparent text-2xl font-bold'>Emalian</h1>
				</div>

				<Tabs defaultValue='trader'>
					<TabsList className=''>
						<TabsTrigger value='trader' className='w-[107px] h-[33px]'>
							Trader
						</TabsTrigger>
						<TabsTrigger value='buy-data' className='w-[107px] h-[33px]'>
							Buy Data
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<div className='flex gap-4'>
					<Button variant={'lime'} className='w-[150px]'>
						TG SIZE : 9,564
					</Button>
					<Button variant={'secondary'} className='w-[111px]'>
						Twitter
					</Button>

					<div className='relative flex items-center p-[1px] bg-gradient-to-r from-[#01F1E3] to-[#5CF101] rounded-full h-[35px]'>
						<div className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground'>
							<SearchIcon className='h-4 w-4' />
						</div>
						<Input
							id='search'
							type='search'
							placeholder='Search'
							className='w-[160px] p-2 rounded-full bg-secondary pl-8  focus:outline-none h-[33px]'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
