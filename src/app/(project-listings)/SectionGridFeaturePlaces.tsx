import React from 'react';
import { Project } from '../lib/data';
import Image from 'next/image';

interface SectionGridFeaturePlacesProps {
  data: Project[];
}

const SectionGridFeaturePlaces: React.FC<SectionGridFeaturePlacesProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((project) => (
        <div key={project._id} className="card">
          <div className="card-image">
            {project.images.length > 0 && (
              <Image src={project.images[0].ImagePath} alt={project.images[0].ImageDescription} width={500} height={300} />
            )}
          </div>
          <div className="card-content">
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionGridFeaturePlaces;
