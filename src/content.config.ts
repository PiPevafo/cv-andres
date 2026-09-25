import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const single = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string().optional(),
			updated: z.string().optional(),
			url: z.string().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			year: z.number().min(2000),
			tags: z.array(z.string()).optional(),
			importance: z.number().optional().default(0),
		}),
});

const research = defineCollection({
	loader: glob({ base: './src/content/researchs', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			year: z.number().min(2000),
			tags: z.array(z.string()).optional(),
			importance: z.number().optional().default(0),
		}),
});

// Posters, slide decks and talks. Each entry is a small .md/.mdx file whose
// body is an optional description. Add a PDF under public/posters or
// public/slides and reference it in `file` (path relative to public/), or use
// `url` for an external link (Drive, Zenodo, etc.).
const presentations = defineCollection({
	loader: glob({ base: './src/content/presentations', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		kind: z.enum(['poster', 'slides', 'talk']),
		event: z.string(),
		location: z.string().optional(),
		date: z.string(), // display string, e.g. "Nov 25–29, 2024"
		year: z.number().min(2000),
		file: z.string().optional(),
		url: z.string().optional(),
	}),
});

export const collections = { single, projects, research, presentations };
