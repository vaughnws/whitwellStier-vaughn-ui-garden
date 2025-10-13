import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Components/Status',
  component: Status,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['healthy', 'warning', 'critical'],
      description: 'Health status',
    },
    statusText: {
      control: 'text',
      description: 'Custom status text',
    },
    description: {
      control: 'text',
      description: 'Secondary description text',
    },
    showPulse: {
      control: 'boolean',
      description: 'Show pulse animation',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Healthy: Story = {
  args: {
    status: 'healthy',
    description: '5/5 services running',
    showPulse: true,
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    description: '4/5 services running',
    showPulse: true,
  },
};

export const Critical: Story = {
  args: {
    status: 'critical',
    description: '2/5 services running',
    showPulse: true,
  },
};

export const Disabled: Story = {
  args: {
    status: 'healthy',
    description: '5/5 services running',
    disabled: true,
  },
};

export const CustomText: Story = {
  args: {
    status: 'healthy',
    statusText: 'All Systems Go',
    description: 'Everything is working perfectly',
    showPulse: true,
  },
};

export const NoPulse: Story = {
  args: {
    status: 'warning',
    description: 'High CPU usage detected',
    showPulse: false,
  },
};

export const CustomBackground: Story = {
  args: {
    status: 'healthy',
    description: '5/5 services running',
    backgroundColor: '#2a2a2a',
    showPulse: true,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Status
        status="healthy"
        description="5/5 services running"
        showPulse
      />
      <Status
        status="warning"
        description="4/5 services running"
        showPulse
      />
      <Status
        status="critical"
        description="2/5 services running"
        showPulse
      />
    </div>
  ),
};
