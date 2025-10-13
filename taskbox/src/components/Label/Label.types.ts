export interface LabelProps {
  /**
   * The text content of the label
   */
  text: string;
  /**
   * HTML for attribute (links to input id)
   */
  htmlFor?: string;
  /**
   * Background color of the label
   */
  backgroundColor?: string;
  /**
   * Text color of the label
   */
  color?: string;
  /**
   * Whether the label is disabled
   */
  disabled?: boolean;
  /**
   * Size of the label
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional className for additional styling
   */
  className?: string;
}
