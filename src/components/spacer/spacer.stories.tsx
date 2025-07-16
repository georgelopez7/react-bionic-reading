import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Utility Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    space: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const XSmall: Story = {
  args: {
    space: 'xsmall',
  },
  render: (args) => (
    <div style={{ border: '1px dashed grey', borderRadius: '8px', padding: '10px', fontSize: '1.2em' }}>
      <div>Before Spacer</div>
      <Spacer {...args} />
      <div>After Spacer</div>
    </div>
  ),
};

export const Small: Story = {
  args: {
    space: 'small',
  },
  render: (args) => (
    <div style={{ border: '1px dashed grey', borderRadius: '8px', padding: '10px', fontSize: '1.2em' }}>
      <div>Before Spacer</div>
      <Spacer {...args} />
      <div>After Spacer</div>
    </div>
  ),
};

export const Medium: Story = {
  args: {
    space: 'medium',
  },
  render: (args) => (
    <div style={{ border: '1px dashed grey', borderRadius: '8px', padding: '10px', fontSize: '1.2em' }}>
      <div>Before Spacer</div>
      <Spacer {...args} />
      <div>After Spacer</div>
    </div>
  ),
};

export const Large: Story = {
  args: {
    space: 'large',
  },
  render: (args) => (
    <div style={{ border: '1px dashed grey', borderRadius: '8px', padding: '10px', fontSize: '1.2em' }}>
      <div>Before Spacer</div>
      <Spacer {...args} />
      <div>After Spacer</div>
    </div>
  ),
};
