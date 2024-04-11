import React, { FC } from "react";
import { fetchProjects } from "../../lib/data";
import Image from "next/image";
import SectionGridFilterCard from "../../(project-listings)/SectionGridFilterCard";
import projectListingsData from "../../../data/jsons/__projects.json";

export interface ListingProjectPageProps {}

const ListingProjectPage: FC&lt;ListingProjectPageProps&gt; = () => {
  const projects = await fetchProjects();

  return (
    <div className="container relative">
      <SectionGridFilterCard className="py-24 lg:py-28" data={projects} />
    </div>
  );
};

export default ListingProjectPage;
