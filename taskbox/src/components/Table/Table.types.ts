export interface TableProps {
  /**
   * Background color of the table
   */
  backgroundColor?: string;
  /**
   * Whether the table is disabled
   */
  disabled?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * Children components (TableHeader, TableRow, TableFooter)
   */
  children: React.ReactNode;
}

export interface TableHeaderProps {
  /**
   * Background color of the header
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the header is disabled
   */
  disabled?: boolean;
  /**
   * Children components (TableCell)
   */
  children: React.ReactNode;
}

export interface TableRowProps {
  /**
   * Background color of the row
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the row is disabled
   */
  disabled?: boolean;
  /**
   * Children components (TableCell)
   */
  children: React.ReactNode;
}

export interface TableCellProps {
  /**
   * Background color of the cell
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the cell is disabled
   */
  disabled?: boolean;
  /**
   * Cell content
   */
  children: React.ReactNode;
  /**
   * Is this a header cell
   */
  isHeader?: boolean;
}

export interface TableFooterProps {
  /**
   * Background color of the footer
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the footer is disabled
   */
  disabled?: boolean;
  /**
   * Children components (TableCell)
   */
  children: React.ReactNode;
}
