import type { Meta, StoryObj } from '@storybook/react';
import { NetworkStats } from './NetworkStats';

const meta: Meta<typeof NetworkStats> = {
  title: 'Components/NetworkStats',
  component: NetworkStats,
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
type Story = StoryObj<typeof NetworkStats>;

const sampleInterfaces = [
  { interface: 'eth0', address: '192.168.1.100' },
  { interface: 'wlan0', address: '192.168.1.101' },
  { interface: 'docker0', address: '172.17.0.1' },
];

export const Default: Story = {
  args: {
    interfaces: sampleInterfaces,
  },
};

export const SingleInterface: Story = {
  args: {
    interfaces: [{ interface: 'eth0', address: '192.168.1.100' }],
  },
};

export const ManyInterfaces: Story = {
  args: {
    interfaces: [
      ...sampleInterfaces,
      { interface: 'lo', address: '127.0.0.1' },
      { interface: 'br0', address: '10.0.0.1' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    interfaces: sampleInterfaces,
    disabled: true,
  },
};
