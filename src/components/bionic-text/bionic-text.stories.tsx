import type { Meta, StoryObj } from '@storybook/react-vite';
import { BionicText } from './bionic-text';

import { Spacer } from '../spacer/spacer';

const meta = {
    title: 'Components/Bionic Text',
    component: BionicText,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof BionicText>;


export default meta;

export const BionicTextH1: StoryObj<typeof BionicText> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>

        <BionicText as="h1" text="This is an H1 heading" />
        <Spacer space="large" />
    </div>
  ),
};

export const BionicTextH2: StoryObj<typeof BionicText> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>
      
        <BionicText as="h2" text="This is an H2 heading" />
              <Spacer space="large" />
    </div>
  ),
};

export const BionicTextParagraph: StoryObj<typeof BionicText> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>
        <BionicText as="p" text="This is a paragraph." />
        <Spacer space="large" />
    </div>
  ),
};

export const BionicTextStyled: StoryObj<typeof BionicText> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>
        <BionicText as="p" text="This is a styled paragraph." style={{ color: 'red' }} />
        <Spacer space="large" />
    </div>
  ),
};