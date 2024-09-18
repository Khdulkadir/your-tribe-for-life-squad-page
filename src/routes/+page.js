/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		squads: await directus.request(readItems('squad', {
			sort: ['name'],
		})),
	};
}