import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
      description: 'Background color overlay'
    },
    color: { 
      control: 'color',
      description: 'Text color for title and subtitle'
    },
    disabled: { 
      control: 'boolean',
      description: 'Disabled state'
    },
    height: { 
      control: 'text',
      description: 'Height of the hero image'
    },
    overlayOpacity: { 
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Overlay opacity'
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

const placeholderImage = 'https://vaughnws.ca/aboutpic/vaughn.png';

export const Default: Story = {
  args: {
    src: placeholderImage,
    alt: 'Hero image',
    title: 'Welcome to My Site',
    subtitle: 'Discover my handsome face',
    height: '400px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: placeholderImage,
    alt: 'Disabled hero',
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    height: '400px',
    disabled: true,
  },
};

export const NoText: Story = {
  args: {
    src: placeholderImage,
    alt: 'Hero without text',
    height: '400px',
  },
};

export const CustomColors: Story = {
  args: {
    src: placeholderImage,
    alt: 'Custom colored hero',
    title: 'Custom Styled Hero',
    subtitle: 'With custom colors',
    backgroundColor: 'rgba(25, 118, 210, 0.7)',
    color: '#ffffff',
    height: '400px',
  },
};

export const LightOverlay: Story = {
  args: {
    src: placeholderImage,
    alt: 'Light overlay hero',
    title: 'Light Overlay',
    subtitle: 'With reduced opacity',
    overlayOpacity: 0.3,
    height: '400px',
  },
};

export const Tall: Story = {
  args: {
    src: placeholderImage,
    alt: 'Tall hero',
    title: 'Tall Hero Section',
    subtitle: 'Extra height because why not',
    height: '600px',
  },
};

export const Clickable: Story = {
  args: {
    src: placeholderImage,
    alt: 'Clickable hero',
    title: 'Click Me!',
    subtitle: 'This hero is clickable',
    height: '400px',
    onClick: () => alert('Hero clicked!'),
  },
};
