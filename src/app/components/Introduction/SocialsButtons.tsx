import React from "react";

import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function SocialsButtons() {
  return (
    <section className="flex gap-4 pt-0">
      <Link href="https://www.linkedin.com/in/dustinsoos/" target="_blank">
        <SiLinkedin className="icon" />
      </Link>
      <Link href="https://github.com/dustinsoos" target="_blank">
        <SiGithub className="icon" />
      </Link>
    </section>
  );
}
