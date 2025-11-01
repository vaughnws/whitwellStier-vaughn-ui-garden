import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';
import { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color when checked',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Radio Button',
    value: 'option1',
    name: 'radio-group',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Radio',
    value: 'option1',
    name: 'radio-group',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    value: 'option1',
    name: 'radio-group',
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    value: 'option1',
    name: 'radio-group',
    checked: true,
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    value: 'option1',
    name: 'radio-group',
    checked: true,
    backgroundColor: '#e91e63',
    color: '#e91e63',
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <RadioButton
          label="Option 1"
          value="option1"
          name="demo-group"
          checked={selected === 'option1'}
          onChange={setSelected}
        />
        <RadioButton
          label="Option 2"
          value="option2"
          name="demo-group"
          checked={selected === 'option2'}
          onChange={setSelected}
        />
        <RadioButton
          label="Option 3"
          value="option3"
          name="demo-group"
          checked={selected === 'option3'}
          onChange={setSelected}
        />
        <p style={{ marginTop: '10px' }}>Selected: {selected}</p>
      </div>
    );
  },
};
