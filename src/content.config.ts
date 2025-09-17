import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const single = defineCollection({
  type: 'content',
  schema: ({ image }) =>
		z.object({
    updated: z.string().optional(),
  }),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			year: z.number().min(2000).max(new Date().getFullYear()),
		}),
});

export const collections = { single, projects };
