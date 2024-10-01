import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ReusableCardProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  icon: string;
  gitHubLink: string;
  websiteLink: string;
  development?: boolean;
}

export default function ReusableCard({
  title,
  subTitle,
  description,
  image,
  icon,
  gitHubLink,
  websiteLink,
  development,
}: ReusableCardProps) {
  return (
    <>
      <Card className="mx-auto flex w-full max-w-lg flex-col overflow-hidden rounded-lg shadow-lg shadow-green-400/30 transition-all hover:scale-105">
        <CardBody>
          <Image
            src={image}
            width={520}
            height={400}
            alt="project-img"
            className="rounded-t-lg"
          />
          <Stack spacing="6" className="p-4 text-gray-300">
            <div className="flex items-center gap-2">
              <h3>{title}</h3>
              <Link href={websiteLink} target="_blank">
                <Image src={icon} width={24} height={24} alt="send icon" />
              </Link>
              <Link href={gitHubLink} target="_blank">
                <SiGithub className="text-green-400" width={24} height={24} />
              </Link>
            </div>
            <h4 className="pb-4">{subTitle}</h4>
            {development && (
              <span className="uppercase text-red-400">In Development</span>
            )}
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
