export interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  content?: string;
  /**
   * Image source URL
   */
  imageSrc?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Background color of the card
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Whether the card is disabled
   */
  disabled?: boolean;
  /**
   * Card width
   */
  width?: string;
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Children components (for custom content)
   */
  children?: React.ReactNode;
}
