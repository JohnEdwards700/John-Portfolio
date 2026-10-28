import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    subtitle: z.string(),
    timeframe: z.string(),
    role: z.string(),
    status: z.enum(['shipped', 'prototype', 'research', 'private']),
    technologies: z.array(z.string()),
    featuredOrder: z.number().optional(),
    demoUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    artifactUrl: z.string().url().optional(),
    artifactLabel: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keyContributions: z.array(z.string()),
    outcome: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    timeframe: z.string(),
    location: z.string(),
    summary: z.string(),
    technologies: z.array(z.string()),
    keyContributions: z.array(z.string()),
    featuredOrder: z.number().optional(),
  }),
});

export const collections = { projects, experience };
