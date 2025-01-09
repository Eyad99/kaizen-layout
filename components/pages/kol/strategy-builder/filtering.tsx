'use client';
import React, { FC } from 'react';
import Dropdown from '@/components/reusable/dropdown';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import * as yup from 'yup';

interface StrategyBuilderFilteringProps {
	data: any;
}

const StrategyBuilderFiltering: FC<StrategyBuilderFilteringProps> = ({ data }) => {
	const initialValues = {
		startingBalance: 0,
		riskPerTrade: 0,
		tp: 0,
		sl: 0,
		kolId: data?.kol?.id || 0,
	};

	const handleFormSubmit = (values: any) => {};

	const formSchema = yup.object().shape({
		password: yup.string().required(`password is required`),
	});

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: handleFormSubmit,
		validationSchema: formSchema,
	});

	return (
		<div className='flex items-start justify-between gap-2 flex-wrap'>
			<div className='flex flex-col gap-1'>
				<p className='text-lime-green text-[10px]'>Starting Balance</p>
				<h4 className=' text-[20px] font-bold'>$1000</h4>
				<Dropdown className='text-[10px]' sizeIcon='12px' />
			</div>

			<div className='flex flex-col gap-1'>
				<p className='text-lime-green text-[10px]'>Risk % Per Trades</p>
				<h4 className=' text-[20px] font-bold'>2%</h4>
				<Dropdown className='text-[10px]' sizeIcon='12px' />
			</div>

			<div className='flex flex-col gap-4 w-[10%]'>
				<p className='text-lime-green text-[10px]'>Top Level</p>
				<Slider defaultValue={[33]} max={100} step={1} />
			</div>

			<div className='flex flex-col gap-4 w-[10%]'>
				<p className='text-lime-green text-[10px]'>SL</p>
				<Slider defaultValue={[33]} max={100} step={1} />
			</div>

			<Button variant={'lightLime'} className='w-[471px] text-[10px]'>
				Calculate
			</Button>
		</div>
	);
};

export default StrategyBuilderFiltering;
