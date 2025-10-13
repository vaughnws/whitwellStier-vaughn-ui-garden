import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
        <TableCell isHeader>Email</TableCell>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>35</TableCell>
          <TableCell>bob@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader disabled>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
        <TableCell isHeader>Email</TableCell>
      </TableHeader>
      <tbody>
        <TableRow disabled>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow disabled>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    disabled: true,
  },
};

export const WithFooter: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableCell isHeader>Product</TableCell>
        <TableCell isHeader>Quantity</TableCell>
        <TableCell isHeader>Price</TableCell>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>10</TableCell>
          <TableCell>$100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>5</TableCell>
          <TableCell>$50</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableCell isHeader>Total</TableCell>
        <TableCell isHeader>15</TableCell>
        <TableCell isHeader>$150</TableCell>
      </TableFooter>
    </Table>
  ),
  args: {
    disabled: false,
  },
};

export const ColoredRows: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader backgroundColor="#4caf50" color="#ffffff">
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Status</TableCell>
      </TableHeader>
      <tbody>
        <TableRow backgroundColor="#e8f5e9">
          <TableCell>Project A</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow backgroundColor="#fff3e0">
          <TableCell>Project B</TableCell>
          <TableCell>In Progress</TableCell>
        </TableRow>
        <TableRow backgroundColor="#ffebee">
          <TableCell>Project C</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    disabled: false,
  },
};
