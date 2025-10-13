import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
      description: 'Background color of the label'
    },
    color: { 
      control: 'color',
      description: 'Text color of the label'
    },
    text: { 
      control: 'text',
      description: 'Label text content'
    },
    disabled: { 
      control: 'boolean',
      description: 'Disabled state of the label'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the label'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Label',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Label',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Label',
    size: 'large',
  },
};

export const WithBackground: Story = {
  args: {
    text: 'Colored Label',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    size: 'medium',
  },
};
