"use client"

import React from "react";
import Link from "next/link";
import BionicSwitch from "@/components/bionic-switch/bionic-switch";
import ThemeButton from "@/components/theme-button/theme-button";
import ReactBionicLogo from "@/components/icons/react-bionic-logo/react-bionic-logo";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/" className="bg-card px-4 p-2 border rounded-md flex items-center gap-4">
        <ReactBionicLogo className="w-9 h-7" />
      </Link>

      <div className="flex items-center gap-4">
        <BionicSwitch />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
