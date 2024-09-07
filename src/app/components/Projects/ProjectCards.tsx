"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import linkIcon from "../../../../public/images/link_icon.svg";
import Portfolio from "../../../../public/images/portfolio.png";
import faAssets from "../../../../public/images/fa_assets.png";
import ProjectsAnimationContainer from "./ProjectsAnimationContainer";

export default function ProjectCards() {
  return (
    <ProjectsAnimationContainer>
      <Card className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-lg shadow-lg shadow-green-400/30 md:mx-0 md:w-1/2">
        <CardBody>
          <Image
            src={Portfolio}
            width={520}
            height={400}
            alt="project-img"
            className="rounded-t-lg"
          />
          <Stack spacing="6" className="p-4 text-gray-300">
            <div className="flex items-center gap-2">
              <h3>My Portfolio</h3>
              <Link href="https://dustinmsoos.com/" target="_blank">
                <Image src={linkIcon} width={24} height={24} alt="send icon" />
              </Link>
              <Link
                href="https://github.com/dustinsoos/NextjsPortfolio"
                target="_blank"
              >
                <SiGithub className="text-green-400" width={24} height={24} />
              </Link>
            </div>
            <h4 className="pb-4">
              React | Tailwind CSS | NextJS | Framer-Motion | ChakraUI | Resend
              & React Email
            </h4>
            <Text>
              My Portfolio was created to showcase my work and projects.
              It&#39;s a place where you can find all the information about me
              and my work.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-lg shadow-lg shadow-green-400/30 md:mx-0 md:w-1/2">
        <CardBody>
          <Image
            src={faAssets}
            width={520}
            height={400}
            alt="project-img"
            className="rounded-t-lg"
          />
          <Stack className="p-4 text-gray-300">
            <div className="flex items-center gap-2">
              <h3>Frontend Assets</h3>
              <Link href="https://frontend-assets.vercel.app/" target="_blank">
                <Image src={linkIcon} width={24} height={24} alt="send icon" />
              </Link>
              <Link
                href="https://github.com/dustinsoos/frontend-assets"
                target="_blank"
              >
                <SiGithub className="text-green-400" width={24} height={24} />
              </Link>
            </div>
            <h4 className="pb-4">React | Tailwind CSS | NextJS</h4>
            <Text>
              Frontend Assets was created to help developers find the perfect
              resources for their projects.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </ProjectsAnimationContainer>
  );
}
