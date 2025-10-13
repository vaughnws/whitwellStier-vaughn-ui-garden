import type { Meta, StoryObj } from '@storybook/react';
import { NewsTicker } from './NewsTicker';

const meta: Meta<typeof NewsTicker> = {
  title: 'Components/NewsTicker',
  component: NewsTicker,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsTicker>;

const sampleNews = [
  {
    title: 'New JavaScript Framework Released with Revolutionary Features',
    link: 'https://example.com/news1',
  },
  {
    title: 'AI Breakthrough: Model Achieves Human-Level Performance',
    link: 'https://example.com/news2',
  },
  {
    title: 'Quantum Computing Makes Major Advance in Error Correction',
    link: 'https://example.com/news3',
  },
  {
    title: 'Open Source Project Reaches 100K GitHub Stars',
    link: 'https://example.com/news4',
  },
];

export const Default: Story = {
  args: {
    news: sampleNews,
  },
};

export const FastScroll: Story = {
  args: {
    news: sampleNews,
    speed: 60,
  },
};

export const SlowScroll: Story = {
  args: {
    news: sampleNews,
    speed: 180,
  },
};

export const CustomColor: Story = {
  args: {
    news: sampleNews,
    backgroundColor: '#2563eb',
  },
};

export const Empty: Story = {
  args: {
    news: [],
  },
};

export const Disabled: Story = {
  args: {
    news: sampleNews,
    disabled: true,
  },
};
