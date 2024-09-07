import React from "react";

import ProfileImg from "../../../../public/images/profileimg.jpg";
import Image from "next/image";

export default function IntroImage() {
  return (
    <div className="hidden w-2/5 md:block">
      <Image src={ProfileImg} alt="Profile-Image" className="rounded-2xl" />
    </div>
  );
}
