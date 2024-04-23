import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const isWednesday: boolean = new Date().getDay() === 3;

	return {
		isWednesday
	};
};
