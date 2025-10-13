import type { Meta, StoryObj } from '@storybook/react';
import { MessageBoard } from './MessageBoard';
import { useState } from 'react';

const meta: Meta<typeof MessageBoard> = {
  title: 'Components/MessageBoard',
  component: MessageBoard,
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
type Story = StoryObj<typeof MessageBoard>;

const sampleMessages = [
  {
    id: 1,
    username: 'Alice',
    text: 'Hey everyone! How are things going?',
    timestamp: new Date(Date.now() - 300000).toISOString(),
  },
  {
    id: 2,
    username: 'Bob',
    text: 'All systems are running smoothly!',
    timestamp: new Date(Date.now() - 180000).toISOString(),
  },
  {
    id: 3,
    username: 'Charlie',
    text: 'Just deployed the latest update',
    timestamp: new Date(Date.now() - 60000).toISOString(),
  },
];

export const Default: Story = {
  args: {
    messages: sampleMessages,
    currentUsername: 'Alice',
    newMessage: '',
  },
};

export const WithNewMessage: Story = {
  args: {
    messages: sampleMessages,
    currentUsername: 'Alice',
    newMessage: 'This is a test message',
  },
};

export const Disabled: Story = {
  args: {
    messages: sampleMessages,
    currentUsername: 'Alice',
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [messages, setMessages] = useState(sampleMessages);
    const [newMessage, setNewMessage] = useState('');
    const [username] = useState('Alice');

    const handleSend = () => {
      if (newMessage.trim()) {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            username,
            text: newMessage,
            timestamp: new Date().toISOString(),
          },
        ]);
        setNewMessage('');
      }
    };

    const handleDelete = (id: string | number) => {
      setMessages(messages.filter((m) => m.id !== id));
    };

    return (
      <MessageBoard
        messages={messages}
        currentUsername={username}
        newMessage={newMessage}
        onMessageChange={setNewMessage}
        onSendMessage={handleSend}
        onDeleteMessage={handleDelete}
        onRefresh={() => console.log('Refresh clicked')}
      />
    );
  },
};
