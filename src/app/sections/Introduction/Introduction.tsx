"use client";
import React from "react";

import SocialsButtons from "@/app/components/Introduction/SocialsButtons";
import IntroLeftContainer from "@/app/components/Introduction/IntroLeftContainer";
import IntroText from "@/app/components/Introduction/IntroText";
import IntroImage from "@/app/components/Introduction/IntroImage";
import AnimationContainer from "@/app/components/Introduction/AnimationContainer";

export default function Introduction() {
  return (
    <section className="pt-0">
      <AnimationContainer>
        <IntroLeftContainer>
          <IntroText />
          <SocialsButtons />
        </IntroLeftContainer>
        <IntroImage />
      </AnimationContainer>
      <hr className="mt-4 w-full border-t-2 border-green-400" />
    </section>
  );
}
