"use client";

import React from "react";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";
import { useBionic } from "react-bionic-reading";

const BionicSwitch = () => {
  const { bionicMode, setBionicMode } = useBionic();

  return (
    <div className="flex items-center gap-2 bg-card rounded-md border py-2 px-4">
      <p className="font-bold max-sm:hidden">Bionic Mode: </p>
      <p className={cn(bionicMode && "opacity-20")}>Off</p>
      <Switch
        onCheckedChange={(checked) => setBionicMode(checked)}
        checked={bionicMode}
      />
      <p className={cn(!bionicMode && "opacity-20")}>On</p>
    </div>
  );
};

export default BionicSwitch;
