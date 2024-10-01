"use client";

import React from "react";

import ProjectsAnimationContainer from "./ProjectsAnimationContainer";
import ReusableCard from "../global/ReusableCard";

export default function ProjectCards() {
  return (
    <ProjectsAnimationContainer className="flex w-full flex-col justify-center gap-x-2 gap-y-8 px-2 md:flex-row md:flex-wrap lg:px-0">
      <ReusableCard
        title="BingeLists"
        development
        subTitle="React | Tailwind CSS | NextJS | Supabase | ClerkAuth | Shadcn UI"
        description="Full crud application that allows users to create, read, update, and delete lists seperately rather than one single list."
        image="/images/bingelists.png"
        icon="/images/link_icon.svg"
        websiteLink="https://bingelists.vercel.app/"
        gitHubLink="https://github.com/dustinsoos"
      />
      <ReusableCard
        title="My Portfolio"
        subTitle="React | Tailwind CSS | NextJS | Framer-Motion | ChakraUI | Resend & React Email"
        description="My Portfolio was created to showcase my work and projects. It&#39;s a place where you can find all the information about me and my work."
        image="/images/portfolio.png"
        icon="/images/link_icon.svg"
        websiteLink="https://dustinmsoos.com"
        gitHubLink="https://github.com/dustinsoos/NextjsPortfolio"
      />
      <ReusableCard
        title="Frontend Assets"
        subTitle="React | Tailwind CSS | NextJS"
        description="Frontend Assets was created to help developers find the perfect resources for their projects."
        image="/images/fa_assets.png"
        icon="/images/link_icon.svg"
        websiteLink="https://frontend-assets.vercel.app"
        gitHubLink="https://github.com/dustinsoos/frontend-assets"
      />
    </ProjectsAnimationContainer>
  );
}
