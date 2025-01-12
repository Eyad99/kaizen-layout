import { StrategyBuilder_Req } from '@/core/models';
import { get, post } from '@/utils';

export const kolApi = {
	kolDetails: async (kolId: string) => get(`kols/${kolId}`),
	kolOpportunity: async (kolId: string) => get(`kols/${kolId}/opportunity-score`),
	strategyBuilderFiltering: async (data: StrategyBuilder_Req) => post(`strategy-builder/simulate`, data),
};

export async function Users() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return data;
}
