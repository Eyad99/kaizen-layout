import { SignIn_Req } from '@/core/models';
import { get, post } from '@/utils';

export const authApi = {
	signIn: (data: SignIn_Req) => post(`auth/login`, data),
	logout: () => get(`auth/logout`),
};

export async function logout() {
	return get('users');
}
