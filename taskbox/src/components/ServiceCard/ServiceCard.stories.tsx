import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';

const meta: Meta<typeof ServiceCard> = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
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
type Story = StoryObj<typeof ServiceCard>;

const sampleServices = [
  {
    name: 'Gitea',
    subtitle: 'Git Repository & CI/CD',
    url: 'https://git.example.com',
  },
  {
    name: 'Code Server',
    subtitle: 'VS Code in Browser',
    url: 'https://code.example.com',
  },
  {
    name: 'AI Assistant',
    subtitle: 'Qwen2.5 Coding AI',
    url: 'https://ai.example.com',
  },
  {
    name: 'N8N',
    subtitle: 'Workflow Automation',
    url: 'https://n8n.example.com',
  },
  {
    name: 'File Browser',
    subtitle: 'File Management',
    url: 'https://files.example.com',
  },
  {
    name: 'Documentation',
    subtitle: 'BookStack Wiki',
    url: 'https://docs.example.com',
  },
];

export const Default: Story = {
  args: {
    services: sampleServices,
  },
};

export const FewServices: Story = {
  args: {
    services: sampleServices.slice(0, 3),
  },
};

export const Disabled: Story = {
  args: {
    services: sampleServices,
    disabled: true,
  },
};

export const WithClickHandler: Story = {
  args: {
    services: sampleServices.slice(0, 4),
    onServiceClick: (url: string) => alert(`Clicked: ${url}`),
  },
};
