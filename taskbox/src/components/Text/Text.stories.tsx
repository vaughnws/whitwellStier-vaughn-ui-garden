import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the text',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
    content: {
      control: 'text',
      description: 'Text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the text',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the text',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
      description: 'Font weight',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'This is some text content',
    disabled: false,
    size: 'medium',
    align: 'left',
    weight: 'normal',
  },
};

export const Disabled: Story = {
  args: {
    content: 'This text is disabled',
    disabled: true,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    content: 'Small text',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    content: 'Large text',
    size: 'large',
  },
};

export const Bold: Story = {
  args: {
    content: 'Bold text',
    weight: 'bold',
  },
};

export const Centered: Story = {
  args: {
    content: 'Centered text',
    align: 'center',
  },
};

export const ColoredBackground: Story = {
  args: {
    content: 'Text with colored background',
    backgroundColor: '#ffeb3b',
    color: '#000000',
  },
};
