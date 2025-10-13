export interface NetworkInterface {
  interface: string;
  address: string;
}

export interface NetworkStatsProps {
  /**
   * Array of network interfaces
   */
  interfaces: NetworkInterface[];
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
}
