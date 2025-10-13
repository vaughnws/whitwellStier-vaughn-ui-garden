export interface ButtonProps {
  /**
   * The text content of the button
   */
  label: string;
  /**
   * Background color of the button
   */
  backgroundColor?: string;
  /**
   * Text color of the button
   */
  color?: string;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional className for additional styling
   */
  className?: string;
}
