import React from "react";
import ExperienceCards from "./components/ExperienceCards";

export default function Experience() {
  return (
    <section
      id="Experience"
      className="p-custom-padding flex flex-col justify-center md:items-start md:justify-start"
    >
      <h2>Experience</h2>
      <ExperienceCards />
    </section>
  );
}
