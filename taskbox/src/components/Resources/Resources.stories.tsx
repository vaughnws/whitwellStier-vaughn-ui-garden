import type { Meta, StoryObj } from '@storybook/react';
import { Resources } from './Resources';
import { Status } from '../Status';
import { CpuIcon, ActivityIcon, HardDriveIcon, ThermometerIcon } from '../icons/icons';

const meta: Meta<typeof Resources> = {
  title: 'Components/Resources',
  component: Resources,
  parameters: {
    layout: 'padded',
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
    label: {
      control: 'text',
      description: 'Resource label',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value (0-100)',
    },
    warning: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Warning threshold',
    },
    critical: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Critical threshold',
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
type Story = StoryObj<typeof Resources>;

export const Default: Story = {
  args: {
    label: 'CPU',
    value: 45,
    icon: <CpuIcon />,
  },
};

export const Warning: Story = {
  args: {
    label: 'RAM',
    value: 85,
    icon: <ActivityIcon />,
  },
};

export const Critical: Story = {
  args: {
    label: 'Disk',
    value: 95,
    icon: <HardDriveIcon />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'CPU',
    value: 65,
    icon: <CpuIcon />,
    disabled: true,
  },
};

export const CustomThresholds: Story = {
  args: {
    label: 'Temp',
    value: 70,
    warning: 65,
    critical: 75,
    icon: <ThermometerIcon />,
  },
};

export const NoIcon: Story = {
  args: {
    label: 'Network',
    value: 30,
  },
};

export const FullBar: Story = {
  args: {
    label: 'Usage',
    value: 100,
    icon: <ActivityIcon />,
  },
};

export const SystemResourcesPanel: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#272727', 
      padding: '24px', 
      borderRadius: '12px',
      border: '1px solid #303030',
      maxWidth: '400px'
    }}>
      <h2 style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        marginBottom: '20px',
        color: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <Status status="warning" description="5/5 services running" />
      </h2>
      <Resources label="CPU" value={45} icon={<CpuIcon />} />
      <Resources label="RAM" value={72} icon={<ActivityIcon />} />
      <Resources label="Disk" value={88} icon={<HardDriveIcon />} warning={85} critical={95} />
      <Resources label="Temp" value={65} icon={<ThermometerIcon />} warning={65} critical={75} />
      <div style={{ 
        marginTop: '16px', 
        fontSize: '14px', 
        color: '#f0f0f0', 
        opacity: 0.6,
        textAlign: 'center',
        fontFamily: 'Open Sans, sans-serif'
      }}>
        Uptime: 5d 12h 34m
      </div>
    </div>
  ),
};
