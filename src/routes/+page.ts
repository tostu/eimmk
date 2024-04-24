import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const dateOptions: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Berlin', weekday: 'long' };

	const isWednesday: boolean = new Date().toLocaleString('de-DE', dateOptions) === 'Mittwoch';

	return {
		isWednesday
	};
};
