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

type ProjectEntry = Awaited<ReturnType<typeof getProjects>>[number];

/** Most-recent-first: ongoing work first, then by end date, then start date, then recommended order. */
export function byRecent(a: ProjectEntry, b: ProjectEntry) {
  const end = (p: ProjectEntry) => (p.data.ended === 'present' ? '9999-99' : p.data.ended);
  return (
    end(b).localeCompare(end(a)) ||
    b.data.started.localeCompare(a.data.started) ||
    a.data.order - b.data.order
  );
}
