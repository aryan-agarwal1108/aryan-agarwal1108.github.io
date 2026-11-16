import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // Files starting with "_" (like _template.md) are ignored.
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // One-line highlight shown on cards, e.g. "Sub-8-second deployment"
    result: z.string().optional(),
    year: z.number(),
    // Free-form discipline label. Used for the filter chips and the cover drawing.
    // Drawings exist for: Aerodynamics, Propulsion, Mechanical Design, Quantum, Optics
    category: z.string(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    // Optional: pick a different placeholder drawing than the category's (e.g. "Detector")
    art: z.string().optional(),
    // Captioned figures shown on the project page (click to enlarge).
    // Aim for 2–6: CAD renders, plots, photos of the build, diagrams.
    gallery: z
      .array(z.object({ src: z.string(), caption: z.string(), alt: z.string().optional() }))
      .default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // "Recommended" sort position: current work first, then most impressive/technical
    order: z.number().default(99),
    // For "Most recent" sorting (YYYY-MM). `ended: present` = ongoing.
    started: z.string().regex(/^\d{4}-\d{2}$/),
    ended: z.union([z.literal('present'), z.string().regex(/^\d{4}-\d{2}$/)]),
    // Spec sheet
    role: z.string(),
    org: z.string().optional(),
    supervisor: z.string().optional(),
    timeline: z.string(),
    team: z.string().optional(),
    status: z.string().optional(),
    links: z
      .object({
        github: z.string().optional(),
        demo: z.string().optional(),
        report: z.string().optional(),
        paper: z.string().optional(),
      })
      .default({}),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { projects };
