import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};
