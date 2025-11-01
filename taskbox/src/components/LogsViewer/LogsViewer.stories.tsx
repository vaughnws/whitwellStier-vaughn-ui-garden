import type { Meta, StoryObj } from '@storybook/react';
import { LogsViewer } from './LogsViewer';

const meta: Meta<typeof LogsViewer> = {
  title: 'Components/LogsViewer',
  component: LogsViewer,
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
type Story = StoryObj<typeof LogsViewer>;

const sampleLogs = [
  { container: 'nginx', message: 'Server started on port 80' },
  { container: 'postgres', message: 'Database connection established' },
  { container: 'redis', message: 'Ready to accept connections' },
  { container: 'api', message: 'API server listening on port 3000' },
  { container: 'worker', message: 'Background job processing started' },
];

export const Default: Story = {
  args: {
    logs: sampleLogs,
  },
};

export const FewLogs: Story = {
  args: {
    logs: sampleLogs.slice(0, 2),
  },
};

export const ManyLogs: Story = {
  args: {
    logs: [...sampleLogs, ...sampleLogs, ...sampleLogs],
  },
};

export const CustomHeight: Story = {
  args: {
    logs: sampleLogs,
    maxHeight: '300px',
  },
};

export const Disabled: Story = {
  args: {
    logs: sampleLogs,
    disabled: true,
  },
};
