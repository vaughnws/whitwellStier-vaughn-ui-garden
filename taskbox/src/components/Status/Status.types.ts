export type HealthStatus = 'healthy' | 'warning' | 'critical';

export interface StatusProps {
  /**
   * Health status (healthy, warning, or critical)
   */
  status: HealthStatus;
  /**
   * Primary status text
   */
  statusText?: string;
  /**
   * Secondary descriptive text
   */
  description?: string;
  /**
   * Whether to show animated pulse indicator
   */
  showPulse?: boolean;
  /**
   * Background color override
   */
  backgroundColor?: string;
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}
