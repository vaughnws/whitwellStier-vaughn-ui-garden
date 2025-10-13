export interface ImgProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alt text for the image
   */
  alt: string;
  /**
   * Width of the image
   */
  width?: string;
  /**
   * Height of the image
   */
  height?: string;
  /**
   * Background color (for container)
   */
  backgroundColor?: string;
  /**
   * Whether the image is disabled
   */
  disabled?: boolean;
  /**
   * Border radius
   */
  borderRadius?: string;
  /**
   * Object fit property
   */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
