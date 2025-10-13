import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
      description: 'Background color of the dropdown'
    },
    color: { 
      control: 'color',
      description: 'Text color of the dropdown'
    },
    disabled: { 
      control: 'boolean',
      description: 'Disabled state of the dropdown'
    },
    placeholder: { 
      control: 'text',
      description: 'Placeholder text'
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
    disabled: true,
  },
};

export const WithSelectedValue: Story = {
  args: {
    options: sampleOptions,
    value: 'option2',
    disabled: false,
  },
};

export const CustomColors: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose one',
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('');
    
    return (
      <div>
        <Dropdown
          options={sampleOptions}
          value={selectedValue}
          placeholder="Select an option"
          onChange={setSelectedValue}
        />
        <p style={{ marginTop: '20px' }}>
          Selected: {selectedValue || 'None'}
        </p>
      </div>
    );
  },
};
