export default function PHomeage() {
	return (
		<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
			<div className='grid auto-rows-min gap-4 md:grid-cols-2'>
				<div className='aspect-video rounded-xl bg-secondary' />
				<div className='aspect-video rounded-xl bg-secondary' />
			</div>
			{/* 
			<div className='grid auto-rows-min'>
				<div className='aspect-video rounded-xl bg-muted/50' />
			</div>

			<div className='grid auto-rows-min'>
				<div className='aspect-video rounded-xl bg-muted/50' />
			</div> */}

			{/* <div className='grid auto-rows-min gap-4 md:grid-cols-2 md:grid-rows-3'>
				<div className='aspect-video rounded-xl bg-muted/50' />
			</div> */}
		</div>
	);
}
