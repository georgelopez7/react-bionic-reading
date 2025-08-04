import React from "react";
import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import { useBionic } from "../src/store/useBionic";

const preview: Preview = {
  globalTypes: {
    bionic: {
      description: "Enable bionic reading mode",
      toolbar: {
        title: "Bionic Mode",
        items: [
          { value: true, title: "Bionic Mode: On" },
          { value: false, title: "Bionic Mode: Off" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    bionic: true,
  },
  decorators: [
    (Story, context) => {
      const isBionic = context.globals.bionic as boolean;
      const { setBionicMode } = useBionic();
      useEffect(() => {
        setBionicMode(isBionic);
      }, [isBionic]);

      return <Story />;
    },
  ],
};

export default preview;
