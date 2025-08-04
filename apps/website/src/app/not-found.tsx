import Spacer from "@/components/spacer/spacer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "404 - Page Not Found",
  description:
    "It seems you've lost your way. Lets take you back home!",
};

const Page = () => {
  return (
    <div className="w-[90vw] mx-auto py-8">
      <Spacer size="xxlarge" />
      <div className="flex flex-col items-center justify-center mx-auto w-[80vw] lg:w-[40vw]">
        <h1 className="text-2xl font-bold text-center">
          Oops... You&apos;ve lost your way!
        </h1>
        <Spacer size="small" />
        <p className="text-center text-muted-foreground">
            Lets take you back home!
        </p>
        <Spacer size="medium" />
        <Link href="/">
          <Button>
            <p className="text-sm">Return to Safety</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;