import { getCollection } from 'astro:content';

/** All published (non-draft) projects, sorted by `order`. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
