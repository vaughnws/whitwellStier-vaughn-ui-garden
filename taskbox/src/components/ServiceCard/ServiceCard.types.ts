export interface Service {
  name: string;
  subtitle: string;
  url: string;
}

export interface ServiceCardProps {
  /**
   * Array of services
   */
  services: Service[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Optional className
   */
  className?: string;
  /**
   * Callback when service is clicked
   */
  onServiceClick?: (url: string) => void;
}
