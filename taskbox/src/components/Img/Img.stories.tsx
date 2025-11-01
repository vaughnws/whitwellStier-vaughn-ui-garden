import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the image container',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the image',
    },
    width: {
      control: 'text',
      description: 'Width of the image',
    },
    height: {
      control: 'text',
      description: 'Height of the image',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius of the image',
    },
    objectFit: {
      control: { type: 'select' },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'Object fit property',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

const placeholderImage = 'https://vaughnws.ca/aboutpic/vwithm.png';

export const Default: Story = {
  args: {
    src: placeholderImage,
    alt: 'Placeholder image',
    width: '300px',
    height: '200px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: placeholderImage,
    alt: 'Disabled image',
    width: '300px',
    height: '200px',
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    src: placeholderImage,
    alt: 'Rounded image',
    width: '200px',
    height: '200px',
    borderRadius: '16px',
  },
};

export const Circle: Story = {
  args: {
    src: placeholderImage,
    alt: 'Circle image',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export const WithBackground: Story = {
  args: {
    src: placeholderImage,
    alt: 'Image with background',
    width: '300px',
    height: '200px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
};

export const Clickable: Story = {
  args: {
    src: placeholderImage,
    alt: 'Clickable image',
    width: '300px',
    height: '200px',
    onClick: () => alert('Image clicked!'),
  },
};

export const Responsive: Story = {
  args: {
    src: placeholderImage,
    alt: 'Responsive image',
    width: '100%',
    height: 'auto',
  },
};
