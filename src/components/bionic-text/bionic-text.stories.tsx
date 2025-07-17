import type { Meta, StoryObj } from "@storybook/react-vite";
import { BionicText } from "./bionic-text";
import { Spacer } from "../spacer/spacer";

const meta = {
  title: "Components/Bionic Text",
  component: BionicText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BionicText>;

export default meta;

export const BionicTextH1: StoryObj<typeof BionicText> = {
  render: () => (
    <BionicText
      as="h1"
      text="This is an H1 heading"
      style={{ fontWeight: "normal" }}
      aria-label="This is an H1 heading"
    />
  ),
};

export const BionicTextH2: StoryObj<typeof BionicText> = {
  render: () => (
    <BionicText
      as="h2"
      text="This is an H2 heading"
      style={{ fontWeight: "normal" }}
    />
  ),
};

export const BionicTextParagraph: StoryObj<typeof BionicText> = {
  render: () => <BionicText as="p" text="This is a paragraph." />,
};

export const BionicTextStyled: StoryObj<typeof BionicText> = {
  render: () => (
    <BionicText style={{ color: "red" }} text="This is styled text." />
  ),
};
