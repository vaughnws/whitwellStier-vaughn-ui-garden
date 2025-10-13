export interface ResourceBarProps {
  /**
   * Label for the resource
   */
  label: string;
  /**
   * Current value (0-100)
   */
  value: number;
  /**
   * Warning threshold percentage
   */
  warning?: number;
  /**
   * Critical threshold percentage
   */
  critical?: number;
  /**
   * Icon component or element
   */
  icon?: React.ReactNode;
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
