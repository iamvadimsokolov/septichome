// export type ContentConfig = typeof import("./../src/content.config.js");
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // schema: z.object({
  //   title: z.string(),
  //   description: z.string(),
  //   pubDate: z.coerce.date(),
  //   image: z.optional(image()),
  // })
  // Загрузчик: ищет файлы .md и .mdx в папке src/content/blog/
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Схема валидации фронтматтера
	schema: ({ image }) =>
		z.object({
      bange: z.string(),
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			image: z.optional(image()),
      imageAlt: z.string(),
		}),
});

export const collections = { blog };
