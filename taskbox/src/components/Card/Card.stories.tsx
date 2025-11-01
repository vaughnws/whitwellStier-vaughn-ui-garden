import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    width: {
      control: 'text',
      description: 'Width of the card',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const placeholderImage = 'https://vaughnws.ca/projects/drone.jpeg';

export const Default: Story = {
  args: {
    title: 'Card Title',
    content:
      'This is the card content. It can contain any text or information you want to display.',
    imageSrc: placeholderImage,
    imageAlt: 'Placeholder image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled and cannot be interacted with.',
    imageSrc: placeholderImage,
    imageAlt: 'Disabled card image',
    disabled: true,
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card Without Image',
    content: 'This card does not have an image, just title and content.',
    disabled: false,
  },
};

export const CustomColors: Story = {
  args: {
    title: 'Custom Styled Card',
    content: 'This card has custom background and text colors.',
    imageSrc: placeholderImage,
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    content: 'Click this card to trigger an action.',
    imageSrc: placeholderImage,
    onClick: () => alert('Card clicked!'),
  },
};

export const Wide: Story = {
  args: {
    title: 'Wide Card',
    content: 'This card has a custom width set to be wider than the default.',
    imageSrc: placeholderImage,
    width: '500px',
  },
};

export const WithCustomChildren: Story = {
  render: args => (
    <Card {...args}>
      <div
        style={{
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid #ddd',
        }}
      >
        <button style={{ padding: '8px 16px', marginRight: '8px' }}>
          Action 1
        </button>
        <button style={{ padding: '8px 16px' }}>Action 2</button>
      </div>
    </Card>
  ),
  args: {
    title: 'Card with Actions',
    content: 'This card includes custom child components like buttons.',
    imageSrc: placeholderImage,
  },
};

export const MinimalCard: Story = {
  args: {
    title: 'Minimal Card',
    content: 'A simple card with just the essentials.',
  },
};
