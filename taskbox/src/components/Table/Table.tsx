import React from 'react';
import styled from 'styled-components';
import {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from './Table.types';

const StyledTable = styled.table<{
  $backgroundColor?: string;
  disabled?: boolean;
}>`
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: ${props =>
    props.disabled ? '#f5f5f5' : props.$backgroundColor || '#ffffff'};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  border: 1px solid #ddd;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTableHeader = styled.thead<{
  $backgroundColor?: string;
  $color?: string;
  disabled?: boolean;
}>`
  background-color: ${props =>
    props.disabled ? '#e0e0e0' : props.$backgroundColor || '#f0f0f0'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};
  font-weight: bold;
`;

const StyledTableRow = styled.tr<{
  $backgroundColor?: string;
  $color?: string;
  disabled?: boolean;
}>`
  background-color: ${props =>
    props.disabled ? '#f5f5f5' : props.$backgroundColor || '#ffffff'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: ${props =>
      props.disabled
        ? '#f5f5f5'
        : props.$backgroundColor
          ? `${props.$backgroundColor}ee`
          : '#f9f9f9'};
  }
`;

const StyledTableCell = styled.td<{
  $backgroundColor?: string;
  $color?: string;
  $isHeader?: boolean;
  disabled?: boolean;
}>`
  padding: 12px;
  text-align: left;
  background-color: ${props =>
    props.disabled ? '#f5f5f5' : props.$backgroundColor || 'transparent'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};
  font-weight: ${props => (props.$isHeader ? 'bold' : 'normal')};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const StyledTableHeaderCell = styled.th<{
  $backgroundColor?: string;
  $color?: string;
  disabled?: boolean;
}>`
  padding: 12px;
  text-align: left;
  background-color: ${props =>
    props.disabled ? '#e0e0e0' : props.$backgroundColor || 'transparent'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const StyledTableFooter = styled.tfoot<{
  $backgroundColor?: string;
  $color?: string;
  disabled?: boolean;
}>`
  background-color: ${props =>
    props.disabled ? '#e0e0e0' : props.$backgroundColor || '#f0f0f0'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};
  font-weight: bold;
`;

export const Table: React.FC<TableProps> = ({
  backgroundColor,
  disabled = false,
  className,
  children,
}) => {
  return (
    <StyledTable
      $backgroundColor={backgroundColor}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledTable>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  backgroundColor,
  color,
  disabled = false,
  children,
}) => {
  return (
    <StyledTableHeader
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
    >
      <tr>{children}</tr>
    </StyledTableHeader>
  );
};

export const TableRow: React.FC<TableRowProps> = ({
  backgroundColor,
  color,
  disabled = false,
  children,
}) => {
  return (
    <StyledTableRow
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
    >
      {children}
    </StyledTableRow>
  );
};

export const TableCell: React.FC<TableCellProps> = ({
  backgroundColor,
  color,
  disabled = false,
  isHeader = false,
  children,
}) => {
  if (isHeader) {
    return (
      <StyledTableHeaderCell
        $backgroundColor={backgroundColor}
        $color={color}
        disabled={disabled}
      >
        {children}
      </StyledTableHeaderCell>
    );
  }

  return (
    <StyledTableCell
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
      $isHeader={isHeader}
    >
      {children}
    </StyledTableCell>
  );
};

export const TableFooter: React.FC<TableFooterProps> = ({
  backgroundColor,
  color,
  disabled = false,
  children,
}) => {
  return (
    <StyledTableFooter
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
    >
      <tr>{children}</tr>
    </StyledTableFooter>
  );
};
