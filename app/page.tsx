import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { WavyBackgroundDemo } from "@/components/WavyBackground/WavyBackgroundView"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 md:py-10">
      <WavyBackgroundDemo />
    </section>
  )
}
