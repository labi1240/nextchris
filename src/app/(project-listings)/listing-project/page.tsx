import React, { FC, useEffect, useState } from "react";
import SectionGridFilterCard from "../../(project-listings)/SectionGridFilterCard";
import projectListingsData from "../../../data/jsons/__projects.json";

export interface ListingProjectPageProps {}

const ListingProjectPage: FC&lt;ListingProjectPageProps&gt; = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulating fetching data from "__projects.json"
    setProjects(projectListingsData);
  }, []);

  return (
    <div className="container relative">
      <SectionGridFilterCard className="py-24 lg:py-28" data={projects} />
    </div>
  );
};

export default ListingProjectPage;
