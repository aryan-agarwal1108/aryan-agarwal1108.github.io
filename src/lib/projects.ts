import { getCollection } from 'astro:content';

/** All published (non-draft) projects, sorted by `order`. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** How many projects use each tool (keyed by lowercase tag). */
export async function getToolCounts() {
  const counts = new Map<string, number>();
  for (const p of await getProjects()) {
    for (const t of p.data.tags) counts.set(t.toLowerCase(), (counts.get(t.toLowerCase()) ?? 0) + 1);
  }
  return counts;
}
