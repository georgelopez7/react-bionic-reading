import type { Meta, StoryObj } from '@storybook/react';

import { BionicBlock } from './bionic-block';

import { Spacer } from '../spacer/spacer';

const meta: Meta<typeof BionicBlock> = {
  title: 'Components/Bionic Block',
  component: BionicBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BionicBlock>;

export const BionicBlockStory: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>
          <BionicBlock>
            <h1>Hello World</h1>
            <p>This is a paragraph.</p>
            <p>This is another paragraph.</p>
          </BionicBlock>
        <Spacer space="large" />
      </div>

    );
  },
};
