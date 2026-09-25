import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { BASE_URL, SITE_DESCRIPTION, SITE_TITLE } from '../consts';

// Feed of posters, slides and talks (newest first).
export async function GET(context) {
	const items = (await getCollection('presentations')).sort(
		(a, b) => b.data.year - a.data.year || b.data.order - a.data.order,
	);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: items.map((e) => ({
			title: e.data.title,
			description: `${e.data.event} · ${e.data.date}`,
			pubDate: new Date(`${e.data.year}-01-01`),
			link: e.data.file ? `${BASE_URL}/${e.data.file}` : e.data.url ?? `${BASE_URL}/presentations`,
		})),
	});
}
