export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  /**
   * Array of options for the dropdown
   */
  options: DropdownOption[];
  /**
   * Currently selected value
   */
  value?: string;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * Background color of the dropdown
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
}
