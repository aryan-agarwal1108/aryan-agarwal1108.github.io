import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // One-line headline result shown on cards, e.g. "Cut latency 40%"
    result: z.string(),
    year: z.number(),
    category: z.enum(['Software', 'Hardware', 'Embedded', 'CAD', 'Research']),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // Spec sheet
    role: z.string(),
    timeline: z.string(),
    team: z.string(),
    status: z.string().default('Complete'),
    links: z
      .object({
        github: z.string().optional(),
        demo: z.string().optional(),
        report: z.string().optional(),
      })
      .default({}),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { projects };
