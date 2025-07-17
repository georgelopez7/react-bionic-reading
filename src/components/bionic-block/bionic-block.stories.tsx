import type { Meta, StoryObj } from "@storybook/react";
import { BionicBlock } from "./bionic-block";

const meta: Meta<typeof BionicBlock> = {
  title: "Components/Bionic Block",
  component: BionicBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BionicBlock>;

export const BionicBlockStory: Story = {
  render: () => {
    return (
      <BionicBlock>
        <h1 style={{ fontWeight: "normal" }}>This is an H1 heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        Text with no tags
      </BionicBlock>
    );
  },
};
