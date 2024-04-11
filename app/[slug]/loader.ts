// loader.ts
import { projectsData } from '@/lib/data';
import type { NextApiRequest } from 'next';
import { Project } from '@/lib/types';

export async function loader(request: NextApiRequest) {
  const { slug } = request.query;
  
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }
  
  return project;
}
