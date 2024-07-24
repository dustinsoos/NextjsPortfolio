"use client";

import React from "react";
import TechSkillsList from "./components/TechSkillsList";

import "../../styles/iconStyles.css";

export default function TechSkills() {
  return (
    <>
      <section id="TechSkills" className="min-h-screen pb-40">
        <h2>TechSkills</h2>
        <div className="flex flex-col items-start justify-start gap-6">
          <TechSkillsList />
        </div>
      </section>
      <hr className="mt-4 border-t-2 border-green-400" />
    </>
  );
}
