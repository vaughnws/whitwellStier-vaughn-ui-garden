import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);

const sampleEvents = [
  {
    title: 'Web Development 101',
    start: today.toISOString(),
    location: 'Room 204',
  },
  {
    title: 'React Advanced Patterns',
    start: tomorrow.toISOString(),
    location: 'Online',
  },
  {
    title: 'Database Design',
    start: nextWeek.toISOString(),
    location: 'Lab 3',
  },
];

export const Default: Story = {
  args: {
    events: sampleEvents,
  },
};

export const Empty: Story = {
  args: {
    events: [],
  },
};

export const Disabled: Story = {
  args: {
    events: sampleEvents,
    disabled: true,
  },
};

export const ManyEvents: Story = {
  args: {
    events: [
      ...sampleEvents,
      {
        title: 'TypeScript Workshop',
        start: new Date(today.getTime() + 8 * 24 * 60 * 60 * 1000).toISOString(),
        location: 'Room 105',
      },
      {
        title: 'Node.js Fundamentals',
        start: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
  },
};
