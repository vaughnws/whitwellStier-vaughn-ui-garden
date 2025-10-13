export interface RadioButtonProps {
  /**
   * Label text for the radio button
   */
  label: string;
  /**
   * Value of the radio button
   */
  value: string;
  /**
   * Name attribute for grouping radio buttons
   */
  name: string;
  /**
   * Whether the radio button is checked
   */
  checked?: boolean;
  /**
   * Background color when checked
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the radio button is disabled
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
