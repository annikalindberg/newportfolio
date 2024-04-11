// page.tsx
import useLoaderData from "next/app"
import ProjectDetails from '@/components/projectDetails'; // Replace with your actual import path

export default function ProjectPage() {
  const project = useLoaderData();  // This will get the project data from your loader

  return (
    <main>
      <ProjectDetails project={project} /> </main>
  );
}
