const baseURL = 'https://analyst.kznhks.com/';

import Cookies from 'js-cookie';
import { KEY_TOKEN_COOKIE } from '../constants';

export interface ApiResponse<T = any> {
	data: T;
	statusCode: number;
	message: string;
	meta: { currentPage: number; itemsPerPage: number; totalItems: number; totalPages: number } | null;
	link: { current: string };
}

// Request Interceptor: Add Authorization Header
const requestInterceptor = (config: RequestInit): RequestInit => {
	const token = Cookies.get(KEY_TOKEN_COOKIE) ? `Bearer ${Cookies.get(KEY_TOKEN_COOKIE)}` : undefined;
	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
};

// Response Interceptor: Handle Errors
const responseInterceptor = async (response: Response & ApiResponse): Promise<ApiResponse> => {
	if (!response.ok) {
		const errorData = await response.json();

		if (response.statusCode === 401) {
			window.location.href = '/401';
		} else {
			console.error('Error:', errorData.message || response.statusText);
		}
		return Promise.reject(errorData);
	}
	return await response.json();
};

// Helper function for making API requests
const apiRequest = async (url: string, config: RequestInit = {}): Promise<ApiResponse> => {
	const finalConfig = requestInterceptor({
		...config,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...config.headers,
		},
	});

	const response = await fetch(`${baseURL}${url}`, finalConfig);
	return responseInterceptor(response as Response & ApiResponse);
};

// CRUD methods
export const get = (url: string, config: RequestInit = {}) => apiRequest(url, { ...config, method: 'GET' });
export const post = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'POST', body: JSON.stringify(body) });
export const put = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'PUT', body: JSON.stringify(body) });
export const destroy = (url: string, config: RequestInit = {}) => apiRequest(url, { ...config, method: 'DELETE' });
export const patch = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'PATCH', body: JSON.stringify(body) });
