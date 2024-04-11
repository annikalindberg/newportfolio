// ProjectDetails.tsx
import React from 'react';
import { Project } from '@/lib/types'; // import the Project type
import Image from 'next/image';

type ProjectDetailsProps = {
  project: Project;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Image src={project.imageUrl} alt={`Image for ${project.title}`} />
      {/* Render other project details here */}
    </div>
  );
};

export default ProjectDetails;
