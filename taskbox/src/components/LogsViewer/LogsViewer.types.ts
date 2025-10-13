export interface LogEntry {
  container: string;
  message: string;
}

export interface LogsViewerProps {
  /**
   * Array of log entries
   */
  logs: LogEntry[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Max height of logs container
   */
  maxHeight?: string;
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Optional className
   */
  className?: string;
}
