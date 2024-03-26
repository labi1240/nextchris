import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProjectDataType } from '@/data/types';
import fs from 'fs';
import path from 'path';
import ProjectCard from '@/components/ProjectCard';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'jsons', '__projects.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      projects: data,
    },
  };
}

const ProjectListingsPage = ({ projects }) => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (projects) {
      setProjectData(projects);
    }
  }, [projects]);

  return (
    <div>
      {projectData.map((project) => (
        <ProjectCard key={project.id} data={project} onClick={() => router.push(`/projects/${project.id}`)} />
      ))}
    </div>
  );
};

export default ProjectListingsPage;
