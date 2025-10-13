import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableHeader, TableRow, TableCell } from './Table';

describe('Table Component', () => {
  it('should render the table and be visible', () => {
    render(
      <Table>
        <TableHeader>
          <TableCell isHeader>Header</TableCell>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell Content</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <Table backgroundColor="#ffffff">
        <TableHeader>
          <TableCell isHeader>Header</TableCell>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const table = screen.getByRole('table');
    const enabledBackground = window.getComputedStyle(table).backgroundColor;
    
    rerender(
      <Table disabled backgroundColor="#ffffff">
        <TableHeader>
          <TableCell isHeader>Header</TableCell>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const disabledBackground = window.getComputedStyle(table).backgroundColor;
    expect(enabledBackground).not.toBe(disabledBackground);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const table = screen.getByRole('table');
    const cursorStyle = window.getComputedStyle(table).cursor;
    expect(cursorStyle).toBe('not-allowed');
  });
});
