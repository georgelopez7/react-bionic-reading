import React from "react";
import Navbar from "@/components/page-layout/navbar/navbar";
import Spacer from "@/components/spacer/spacer";
import { cn } from "@/lib/utils";

interface IPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({
  children,
  className,
}: IPageLayoutProps) => {
  return (
    <div
      className={cn(
        "w-[94vw] md:w-[88vw] lg:w-[80vw] flex flex-col items-center mx-auto max-sm:px-2 relative",
        className
      )}
    >
      <Spacer size="small" />
      <Navbar />
      <Spacer size="medium" />
      {children}
      <Spacer size="large" />
    </div>
  );
};

export default PageLayout;