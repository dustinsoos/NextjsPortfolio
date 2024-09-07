import ProjectCards from "@/app/components/Projects/ProjectCards";
import React from "react";

export default function MyProjects() {
  return (
    <>
      <section
        id="MyProjects"
        className="flex flex-col justify-center p-custom-padding md:items-start md:justify-start"
      >
        <h2>Projects</h2>
        <ProjectCards />
      </section>
      <hr className="mt-4 border-t-2 border-green-400" />
    </>
  );
}
