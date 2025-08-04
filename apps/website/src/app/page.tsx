"use client";

import CommandBlock from "@/components/command-tabs";
import BionicBlockExample from "@/components/examples/bionic-block-example/bionic-block-example";
import BionicHookExample from "@/components/examples/bionic-hook-example/bionic-hook-example";
import BionicTextExample from "@/components/examples/bionic-text-example/bionic-text-example";
import GithubIcon from "@/components/icons/github/github";
import NPM from "@/components/icons/npm/npm";
import { BlurFade } from "@/components/magicui/blur-fade";
import PageLayout from "@/components/page-layout/page-layout";
import Spacer from "@/components/spacer/spacer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Blocks, Pointer, Webhook } from "lucide-react";
import Link from "next/link";
import { BionicText } from "react-bionic-reading";

const NPM_PACKAGE_URL = "https://www.npmjs.com/package/react-bionic-reading"
const GITHUB_URL = "https://github.com/georgelopez7/react-bionic-reading"

export default function Home() {
  return (
    <PageLayout>
      {/* HEADER SECTION */}
      <BlurFade className="bg-card py-4 px-8 rounded-md border" delay={0.25}>
        <BionicText className="max-sm:text-5xl text-6xl text-center" text="React Bionic Reading" as="h1" />
      </BlurFade>

      <Spacer size="small" />

      <BlurFade className="bg-card py-4 px-8 rounded-md border" delay={0.5}>
        <BionicText className="text-2xl text-center" text="A react package that helps apply bionic reading / half bold formatting to your text" as="p" />
      </BlurFade>

      <Spacer size="medium" />

      <BlurFade className="w-full" delay={0.75}>
        <CommandBlock
          title="Install Dependencies"
          command="npm install react-bionic-reading"
        />
      </BlurFade>

      <Spacer size="large" />


     {/* COMPONENTS SECTION */}
      <BlurFade className="flex items-center gap-4 bg-card py-4 px-8 rounded-md border" delay={0.75} inView={true}>
        <Blocks className="w-12 h-12" />
        <BionicText className="max-sm:text-3xl text-5xl" text="Components" as="h3" />
      </BlurFade>

      <Spacer size="small" />

      <BlurFade className="w-full lg:w-[670px] flex flex-col justify-center items-center" delay={0.75} inView={true}>
        <BionicTextExample />
      </BlurFade>

      <Spacer size="medium" />

      <BlurFade className="w-full lg:w-[670px] flex flex-col justify-center items-center" delay={0.25} inView={true}>
        <BionicBlockExample />
      </BlurFade>

      <Spacer size="large" />

      {/* HOOKS SECTION */}
      <BlurFade className="flex items-center gap-4 bg-card py-4 px-8 rounded-md border" delay={0.25} inView={true}>
        <Webhook className="w-12 h-12" />
        <BionicText className="max-sm:text-3xl text-5xl text-center" text="Hooks" as="h3" />
      </BlurFade>

      <Spacer size="small" />

      <BlurFade className="w-full lg:w-[670px] flex flex-col justify-center items-center" delay={0.25} inView={true}>
        <BionicHookExample />
      </BlurFade>

      <Spacer size="large" />

      { /* EXPLORE SECTION */ }
      <BlurFade className="flex items-center gap-4 bg-card py-4 px-8 rounded-md border" delay={0.25} inView={true}>
        <Pointer className="w-12 h-12 rotate-180" />
        <BionicText className="max-sm:text-3xl text-5xl text-center" text="Explore here" as="h3" />
      </BlurFade>

      <Spacer size="small" />

      <div className="flex items-center gap-4">
        <BlurFade className="flex items-center gap-4 bg-card py-2 px-4 rounded-md border" delay={0.25} inView={true}>
        <Link className={cn("flex items-center gap-2", buttonVariants({ variant: "link"}), "[&_svg]:size-7")} href={GITHUB_URL}>
          <GithubIcon />
            <BionicText className="text-lg text-center" text="Github" as="p" />
          </Link>
        </BlurFade>

        <BlurFade className="flex items-center gap-4 bg-card p-2 rounded-md border" delay={0.25} inView={true}>
          <Link className={cn("flex items-center gap-2", buttonVariants({ variant: "link"}), "[&_svg]:size-12")} href={NPM_PACKAGE_URL}>
              <NPM className="w-24 h-12" />
            <BionicText className="text-lg text-center" text="Install from NPM" as="p" />
          </Link>
        </BlurFade>
      </div>


    </PageLayout>
  );
}
