export interface CalendarEvent {
  title: string;
  start: string;
  location?: string;
}

export interface CalendarProps {
  /**
   * Array of calendar events
   */
  events: CalendarEvent[];
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
