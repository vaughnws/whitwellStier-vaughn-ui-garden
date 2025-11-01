import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the button',
    },
    color: {
      control: 'color',
      description: 'Text color of the button',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#ec5a00ff',
    color: '#ffffff',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
};

export const CustomColors: Story = {
  args: {
    label: 'Custom Button',
    backgroundColor: '#e91e63',
    color: '#ffffff',
    size: 'medium',
  },
};
