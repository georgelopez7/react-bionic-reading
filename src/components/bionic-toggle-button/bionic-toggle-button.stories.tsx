import type { Meta, StoryObj } from '@storybook/react';
import { BionicToggleButton } from './bionic-toggle-button';

const meta: Meta<typeof BionicToggleButton> = {
  title: 'Utility Components/Bionic Toggle Button',
  component: BionicToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BionicToggleButton>;

export const BionicToggleButtonStory: Story = {
  render: () => {
    return (
      <BionicToggleButton />
    );
  },
};