"use client";
import React from "react";
import { WavyBackground } from "@/components/WavyBackground/WavyBackground";
import { TypewriterEffectSmooth } from "@/components/Typewritter/TypeWritterEffect";
import { words } from "@/lib/words";

export function WavyBackgroundDemo() {

  return (
    <WavyBackground className="mt-[15rem] md:mt-40 max-w-4xl mx-auto pb-40">
      <section className="p-4 sm:p-6 lg:p-2 xl:p-0">
        <TypewriterEffectSmooth words={words} />
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power descentralized knowledge.
        </p>
      </section>
    </WavyBackground>
  );
}
