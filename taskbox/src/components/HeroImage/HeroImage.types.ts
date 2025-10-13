export interface HeroImageProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alt text for the image
   */
  alt: string;
  /**
   * Hero title text
   */
  title?: string;
  /**
   * Hero subtitle text
   */
  subtitle?: string;
  /**
   * Height of the hero image
   */
  height?: string;
  /**
   * Background color overlay
   */
  backgroundColor?: string;
  /**
   * Text color for title and subtitle
   */
  color?: string;
  /**
   * Whether the hero is disabled
   */
  disabled?: boolean;
  /**
   * Overlay opacity (0-1)
   */
  overlayOpacity?: number;
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
