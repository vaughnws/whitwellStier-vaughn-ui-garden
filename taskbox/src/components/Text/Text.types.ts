export interface TextProps {
  /**
   * The text content
   */
  content: string;
  /**
   * Background color of the text container
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the text is disabled
   */
  disabled?: boolean;
  /**
   * Size of the text
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Font weight
   */
  weight?: 'normal' | 'bold';
  /**
   * Optional className for additional styling
   */
  className?: string;
}
