"use client";
import React from "react";
import { WavyBackground } from "@/components/WavyBackground/WavyBackground";
// import { TypewriterEffect } from "@/components/TypeWritterEffect/TypeWritterEffect";

export function WavyBackgroundDemo() {

  return (
    <WavyBackground className="mt-[15rem] md:mt-40 max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        OpenWiki
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power descentralized knowledge.
      </p>
    </WavyBackground>
  );
}
