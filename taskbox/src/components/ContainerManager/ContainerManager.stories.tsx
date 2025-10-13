import type { Meta, StoryObj } from '@storybook/react';
import { ContainerManager } from './ContainerManager';
import { useState } from 'react';

const meta: Meta<typeof ContainerManager> = {
  title: 'Components/ContainerManager',
  component: ContainerManager,
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
type Story = StoryObj<typeof ContainerManager>;

const sampleContainers = [
  { name: 'nginx', status: 'running' as const },
  { name: 'postgres', status: 'running' as const },
  { name: 'redis', status: 'stopped' as const },
  { name: 'api', status: 'running' as const },
];

export const Locked: Story = {
  args: {
    containers: sampleContainers,
    isPinUnlocked: false,
  },
};

export const Unlocked: Story = {
  args: {
    containers: sampleContainers,
    isPinUnlocked: true,
  },
};

export const Disabled: Story = {
  args: {
    containers: sampleContainers,
    isPinUnlocked: true,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [containers, setContainers] = useState(sampleContainers);
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleStart = (name: string) => {
      setContainers(
        containers.map((c) =>
          c.name === name ? { ...c, status: 'running' as const } : c
        )
      );
    };

    const handleStop = (name: string) => {
      setContainers(
        containers.map((c) =>
          c.name === name ? { ...c, status: 'stopped' as const } : c
        )
      );
    };

    const handleStartAll = () => {
      setContainers(
        containers.map((c) => ({ ...c, status: 'running' as const }))
      );
    };

    const handleStopAll = () => {
      setContainers(
        containers.map((c) => ({ ...c, status: 'stopped' as const }))
      );
    };

    return (
      <ContainerManager
        containers={containers}
        isPinUnlocked={isUnlocked}
        onStart={handleStart}
        onStop={handleStop}
        onRestart={handleStart}
        onStartAll={handleStartAll}
        onStopAll={handleStopAll}
        onRestartAll={handleStartAll}
        onUnlock={() => setIsUnlocked(true)}
      />
    );
  },
};
