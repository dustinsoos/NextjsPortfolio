import React from "react";

export default function IntroLeftContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 pt-0 sm:w-full md:w-3/5">
      {children}
    </section>
  );
}
